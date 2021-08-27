import { promises as fsp, existsSync } from 'fs';
import fetch, { Response } from 'node-fetch';
import { dirname, join } from 'path';

const username: string = 'DonMahallem';
const pageSize: number = (process.env.TOKEN) ? 100 : 25;
const BEARER: string = (process.env.TOKEN) ? `Bearer ${process.env.TOKEN}` : '';
console.log('Query with Bearer', BEARER != '');
const getPage = async (page: number): Promise<any[]> => {
    return fetch(`https://api.github.com/users/${username}/repos?per_page=${pageSize}&page=${page}`, {
        headers: {
            'User-Agent': 'Prerender DonMahallem repo',
            'content-type': 'application/json',
            'authorization': BEARER,
        },
    })
        .then((res: Response): any => {
            if (res.status === 429) {
                return Promise.reject(new Error('Github Rate Limited'));
            }
            return res.json();
        });

}
const create = async (): Promise<void> => {
    const data: any[] = [];
    const dataPage: any[] = [];
    const outputPages: string[] = ['', 'repos', '404'];
    for (let page: number = 0; page < 100; page++) {
        console.group(`Repo Page ${page} by ${username}`);
        outputPages.push(`repos/${page}`)
        const resp: any[] = await getPage(page);
        dataPage.push(resp);
        console.log(`Got ${resp.length} items`);
        console.groupEnd();
        data.push(...resp);
        if (resp.length < pageSize) {
            break;
        }
    }
    console.log('Total Repos', data.length);
    outputPages.push(...data
        .map((repo: any, idx: number): string => {
            //console.log(repo);
            return `repo/${repo.name}`;
        }));
    // write json data
    for (let repo of data) {
        const dirPath: string = join('./src', 'assets', 'repo', repo.owner.login, `${repo.name}.json`);
        if (!existsSync(dirname(dirPath))) {
            await fsp.mkdir(dirname(dirPath), { recursive: true });
        }
        await fsp.writeFile(dirPath, JSON.stringify(repo));
    }
    for (let i = 0; i < dataPage.length; i++) {
        const dirPath: string = join('./src', 'assets', 'repos', `${i}.json`);
        if (!existsSync(dirname(dirPath))) {
            await fsp.mkdir(dirname(dirPath), { recursive: true });
        }
        await fsp.writeFile(dirPath, JSON.stringify(dataPage[i]));
    }

    console.log('Total Pages Filtered', outputPages.length);
    for (let i: number = 0; i < outputPages.length; i++) {
        if (!outputPages[i].startsWith('/')) {
            outputPages[i] = `/${outputPages[i]}`;
        }
    }
    const outputFile: string = outputPages.join('\r\n');
    await fsp.writeFile('./prerender.txt', outputFile, 'utf8');
}

create();
