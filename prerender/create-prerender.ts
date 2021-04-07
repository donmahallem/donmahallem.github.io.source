import { promises as fsp } from 'fs';
import fetch, { Response } from 'node-fetch';

const username: string = 'DonMahallem';
const pageSize: number = 100;
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
    const data: string[] = [];
    const outputPages: string[] = ['', 'repos', '404'];
    for (let page: number = 0; page < 10; page++) {
        console.group(`Repo Page ${page} by ${username}`);
        outputPages.push(`repos/${page}`);
        const resp: any[] = await getPage(page);
        console.log(`Got ${resp.length} items`);
        console.groupEnd();
        data.push(...resp);
        if (resp.length < 100) {
            break;
        }
    }
    console.log('Total Repos', data.length);
    outputPages.push(...data
        .map((repo: any, idx: number): string => {
            return `repo/${repo.name}`;
        }));
    const outputFile: string = outputPages.join('\r\n');
    await fsp.writeFile('./prerender.txt', outputFile, 'utf8');
}

create();
