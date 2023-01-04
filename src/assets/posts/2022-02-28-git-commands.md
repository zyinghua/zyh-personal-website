---
title:  "Git Commands"
layout: post
---

### Login & Pull

Set your git user email for every repository on your computer
> $ git config `--`global user.email "xxx@email.com"

Set your git username for every repository on your computer
> $ git config `--`global user.name "zyinghua" 

Clone from github/gitlab, etc...:
> $ git clone https://github.com/zyinghua/...

Pull from the repository cloned while staying in that clone (which contains .git):
> $ git pull

---

### Commit & Push

1. Check Status (between the platform and the local repo):
> $ git status

2. Add a newly affected file:
> $ git add newFile.txt

2. Add ALL newly affected files:
> $ git add .

3. Commit the changes:
> $ git commit -m "Comment message goes here..."

4. Push the changes:
> $ git push

---

### Branch & Merge

To check all the branches:
> $ git branch

To add a new branch:
> $ git branch branchname

To change to a specific branch:
> $ git checkout branchname

Once commited in a non-main branch, the changes will not be visible to the other branches! Until the merge.

To create a new empty file:
> $ touch filename.html (or txt, etc...)

To edit the file in git bash:
> $ nano filename.html

To show differences between the current branch and the other one:
> $ git diff otherbranchname (e.g. main)

To merge branches:
> Switch to the main branch ($ git checkout main), and then:
> $ git merge branchname