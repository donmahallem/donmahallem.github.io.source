---
title: "Github Pages Deployment"
date: 2022-03-07T11:03:49+01:00
# weight: 1
# aliases: ["/first"]
tags: ["hugo","github"]
author: ["donmahallem"] # multiple authors
showToc: true
description: "Observation deploying of non jekyll page to github pages"
---
Recently I tried to deploy a Hugo based webpage to Github Pages.
I ran into a few issues where indexing didn't work as expected.
It did turn out, that I had to include an empty `.jekyll` file into the static folder so I would be deployed to the root folder being deployed to Github Pages..
