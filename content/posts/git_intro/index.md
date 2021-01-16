---
title: "Intro to Git"
date: 2021-01-15T16:52:00+05:30
description: Don't share codes on WhatsApp and Discord, use git and github
menu:
  sidebar:
    name: Git
    identifier: git
    weight: 20
---

Don't share codes on WhatsApp and Discord, use git and github

## Quick Basics

`git init` to init a dir as local git repo

- Workdpace
- Staging area
- Local Repo

`git remote add origin <url>` to point local repo to remote repo

You might want to add your details before going further

`git config --global user.name "Your Name Comes Here"`
`git config --global user.email you@yourdomain.example.com`

`git add .` takes snapshot in a temporary staging area called 'index' i.e from working dir to staging area

Using `git commit` we can store the contents of index permanently in the local repo (usually a master branch)

`git commit -a` notices only modified files

## Reverting back

tag, commit id

## Handling Changes

Supposing we modify some files, we can update the index using `git add file_name`

We can see what's to be committed using `git diff --cached` and a brief summary with `git status`

## Branches

pull,push
delete