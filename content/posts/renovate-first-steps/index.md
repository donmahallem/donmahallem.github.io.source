---
title: "First steps with renovate"
date: 2022-02-16T11:03:49+01:00
lastmod: 2022-03-10T19:03:49+01:00
# weight: 1
# aliases: ["/first"]
tags: ["renovate","github"]
author: ["donmahallem"] # multiple authors
showToc: true
description: "How to get started with renovate"
---
Most probably you did come across automatic dependency managment already. 
There are several options available that do create automatic pull requests to your codebase, with updates to your declared dependencies.
For example there is the nowawadays in Github integrated [Dependabot](https://github.com/dependabot) or Renovate. 
I will focus on the latter one.

You either could run renovate self-hosted in which case I would recommend you to consult their documentation or use the Github App which 
is available on the Github Marketplace.

First you will need to create `renovate.json` file. For posible locations please consult the current [Renovate Documentation](https://docs.renovatebot.com/getting-started/installing-onboarding/#configuration-location)
If you do use the Renovate App and no such file is available in your default branch on Github a Pull Request will be created which offers you to add it.

In case you don't want the update pull requests to be pushed to your default branch you specify other target branches with the baseBranch property in the config
```json
{
    "baseBranches": [
        "source"
    ]
}
```
Renovate does offer an option to display all current pending tasks inside an automatically updated issue. Set the [`dependencyDashboard`](https://docs.renovatebot.com/configuration-options/#automerge) to true.
It will also enable you to retry failed or outdated pull requests in a single place instead of every single pull request.
```json
{
    "dependencyDashboard": true
}
```

If you want renovate to merge pull requests automatically if they pass potential tests enable the [`automerge`](https://docs.renovatebot.com/configuration-options/#automerge) property
```json
{
    "automerge": true
}
```
