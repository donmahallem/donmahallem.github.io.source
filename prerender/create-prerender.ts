import { promises as fsp } from 'fs';
import fetch, { Response } from 'node-fetch';

const username: string = 'DonMahallem';
const pageSize: number = 100;
const BEARER: string = (process.env.TOKEN) ? `Bearer ${process.env.TOKEN}` : '';
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
    for (let page = 0; page < 4; page++) {
        console.group(`Repo Page ${page} by ${username}`);
        const resp: any[] = await getPage(page);
        console.log(`Got ${resp.length} items`);
        console.groupEnd();
        data.push(resp);
        if (resp.length < 100) {
            break;
        }
    }
    console.log('Total Repos', data.length);
    const outputFile: string = data
        .map((repo: any, idx: number): string => {
            return `repo/${repo.name}`;
        }).join('\r\n');
    await fsp.writeFile('./prerender.txt', outputFile, 'utf8');
}

create();
