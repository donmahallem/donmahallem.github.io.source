/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import * as express from "express";
import { Server } from "http";
import { difference, uniq } from "lodash";
import { exists, mkdir, readFile, writeFile } from "mz/fs";
import { dirname, join } from "path";
import * as puppeteer from "puppeteer";

// defining some configuration
const PORT = 4000;
const HOST = `http://localhost:${PORT}`;

let PAGES: string[] = [""];
let RENDERED_PAGES: string[] = [];
const timeout: (ms: number) => Promise<any> = (ms: number): Promise<any> =>
    new Promise((resolve) => setTimeout(resolve, ms));
const main = async () => {
    const DIST_BASE_PATH = join(__dirname, "..", "dist", "DonMahallem")
    const DIST_OUTPUT_PATH = join(__dirname, "..", "dist", "prerender")
    // starting an Express.js server to serve the static files while puppeter prerender the pages
    const app = express();

    // setting the html content from the index.html file
    const index = (await readFile(join(DIST_BASE_PATH,
        "index.html"))).toString();
    const subRoute = express.Router();
    subRoute.get("*.*", express.static(DIST_BASE_PATH, {}));
    subRoute.get("*", (req, res) => res.send(index));
    app.use(subRoute);

    // starting the express server
    const server: Server = await (new Promise((resolve, reject) => {
        const s = app.listen(PORT, (e) => e ? reject(e) : resolve(s));
    }));

    // tslint:disable-next-line:no-console
    console.log(`Started server ${HOST}!`);

    // launching Puppeteer
    const browser = await puppeteer.launch();
    await timeout(1000);
    // tslint:disable-next-line:no-console
    console.log(`Started browser!`);

    // creating a new Tap/Page
    const page = await browser.newPage();
    page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36");
    page.on("pageerror", (err) => {
        const theTempValue = err.toString();
        console.log("Page error: " + theTempValue);
    });
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));

    await page.setRequestInterception(true);
    page.on('request', interceptedRequest => {
        console.log("req uri", interceptedRequest.url());
        interceptedRequest.continue();
    });
    do {
        const p = PAGES[0];

        const uri: string = `${HOST}/${p}`;
        // requesting the first page in PAGES array
        await page.goto(uri, { waitUntil: "networkidle0" });

        // getting the html content after the Chromium finish rendering.
        let result = await page.evaluate(() => document.documentElement.outerHTML);
        result = await page.content();
        // defining the html file name that will be created
        let file = "";
        if (p) {
            file = join(DIST_OUTPUT_PATH, p, "index.html");
        } else {
            file = join(DIST_OUTPUT_PATH, "index.html");
        }
        const dir = dirname(file);

        // test if the directory exist, if not create the directory
        if (!(await exists(dir))) {
            await mkdir(dir, { recursive: true } as any);
        }

        // write the rendered html file
        await writeFile(file, result);

        // tslint:disable-next-line:no-console
        console.log(`Wrote (${RENDERED_PAGES.length + 1}) ${file}`);

        // add this page to the RENDERED PAGES array
        RENDERED_PAGES = [...RENDERED_PAGES, p];
        //console.log(RENDERED_PAGES);
        // set PAGES with the pages that still need to be rendered

        /// uniq(PAGES.concat(result.match(/href="\/[\/\w\d\-]*"/g).map(s => s.match(/\/([\/\w\d\-]*)/)[1]))),
        const matchedUrls: RegExpMatchArray | null = result.match(/href="\/[\/\w\d\-]*"/g);
        //console.log("MatchedUrls", matchedUrls);
        if (matchedUrls) {
            const matchedPath = matchedUrls.map((s: string) => {
                const match = s.match(/\/([\/\w\d\-]*)/);
                if (match) {
                    return match[1];
                }
                return "";
            });
            PAGES = difference(
                uniq(PAGES.concat(matchedPath)),
                RENDERED_PAGES,
            );
        } else {
            PAGES = difference(
                PAGES,
                RENDERED_PAGES,
            );
        }

    } while (PAGES.length > 0);

    // closes Chromium and finishes the express server.
    browser.close();
    server.close();
};

// run the main asyn function
main()
    // tslint:disable-next-line:no-console
    .then(() => console.log("All right!"))
    .catch((err) => {
        // tslint:disable-next-line:no-console
        console.error("Err", err);
        process.exit(1);
    });