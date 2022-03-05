import requests
import os
import time
import codecs
import json
from datetime import datetime as dt

username = 'DonMahallem'
pageSize = 25
BEARER = None
if 'TOKEN' in os.environ:
    pageSize = 100
    BEARER = f"Bearer {os.environ['TOKEN']}"

if BEARER != '':
    print('Bearer is set')

def getPage(username,pageSize,page):
    params = {
        "User-Agent":'Prerender DonMahallem repo',
        'content-type': 'application/json',
    }
    if BEARER is not None:
        params['authorization'] = BEARER
    resp =requests.get(f"https://api.github.com/users/{username}/repos?per_page={pageSize}&page={page}", params=params)

    return resp.json() 
os.makedirs("./content/repos/", exist_ok=True)
for page in range(0,1000):
    print(f"Loading page: {page}")
    pageContent = getPage(username=username,pageSize=pageSize,page=page)
    print(f"Contained: {len(pageContent)}")
    for repo in pageContent:
        pageData = dict()
        pageData['source']=repo
        pageData['title']=repo['name']
        pageData['date']=repo['created_at']
        pageData['categories']=["repository"]
        pageData['description']=repo["description"]
        pageData['cover'] = {
            "image": f"https://opengraph.githubassets.com/e2cd6b7baf7072c4f39f426f3cd18dd1a284d8854b96d9f18162decc27d5aaf5/"+repo["full_name"]
        }

        lastPushDate = dt.strptime(repo['pushed_at'], "%Y-%m-%dT%H:%M:%S%z")
        lastUpdateDate = dt.strptime(repo['updated_at'], "%Y-%m-%dT%H:%M:%S%z")

        pageData['lastmod'] = repo['updated_at'] if lastUpdateDate > lastPushDate else repo['pushed_at']
        with codecs.open("./content/repos/"+ repo["name"]+".md",'w') as f:
            f.write("---\n"+json.dumps(pageData)+"\n---\n")
    if len(pageContent) < pageSize:
        break

    time.sleep(1)
