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

### Quick Basics

`git init` to init a dir as local git repo

- Workspace
- Staging area
- Local Repo

`git remote add origin <url>` to point local repo to remote repo

`origin`  is used instead of that original repository's URL

You might want to add your details before going further

`git config --global user.name "Your Name Comes Here"`
`git config --global user.email you@yourdomain.example.com`

`git add .` takes snapshot in a temporary staging area called 'index' i.e from working dir to staging area

Using `git commit` we can store the contents of index permanently in the local repo (usually a master branch)

`git commit -a` notices only modified files

### Reverting back

`git log` gives the commit ids

`git show commit_id` shows details

`git tag tag_obj_name commit_id` gives names to commits and can be used to refer it

###### Example

`git diff tag_obj_name HEAD` compares current HEAD to tab_obj_name

`git branch stable tag_obj_name` starts a new branch named stable based at tag_obj_name

`git restore --staged --worktree --source=NAME file.ext` is same as using `git checkout`

Note:
- `HEAD` is a reference to the last commit in the current checked-out branch
- `HEAD^` is parent of head

### Handling Changes

Supposing we modify some files, we can update the index using `git add file_name`

We can see what's to be committed using `git diff --cached` and a brief summary with `git status`

Look more into git [patch](https://www.geeksforgeeks.org/using-patches-in-git/)

### Branches

`git pull ` is equivalent of `git fetch` and follwed by `git merge`

`git fetch --prune` deletes branches which no longer exist in remote 

`git branch` list all the branches in the repository

`git checkout <branch>` changes HEAD to the given branch name

`git checkout -b <branch>` If branch does not exist ,it adds the branch

`git branch -d <branch>` deletes branch locally

`git push <remote> --delete <branch>` deletes the branch remotely

## Merge
Merge Issues can be resolved easily using VScode mergetools

### More about git

Git users are usually of four types
- Standalones
- Participant
- Integrator
- Admin

Standalones tend to use
1. git init
2. git log
3. git switch
4. git branch
5. git add
6. git diff
7. git status
8. git commit
9. git restore
10. git merge
11. [git rebase](https://git-scm.com/docs/git-rebase)
12. git tag

Participants
1. git clone
2. git pull
3. git fetch
4. git push
5. [git request-pull](https://git-scm.com/docs/git-request-pull)

