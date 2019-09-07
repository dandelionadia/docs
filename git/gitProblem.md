**Working** - your red files

**Staging** - Green files

**Local** - commited on local (NOT pushed)

**Remote** - committed and pushed to remote (i.e. GitHub)

![alt text](./img/GitHub-cheat-sheet-graphic-v1.jpg)

![alt text](./img/259aca7a772f06f110c73f2740c29a65.png)

- **git diff** - сховати зміни
- **git pop** - повернути сзовані зміни назад

* **git commit --amend**

#

### це ЛИШЕ коли зміни не закомічені:

- **git checkout .** - прибрати всі зміни(change commit)

```
$ git reset .
$ git checkout .
```

`reset` робить зелені файли червоними

`checkout` прибирає зміни (червоні файли)

- **To see all branches?**

```
	git branch -l
```

## merge conflict (rebase)

- chenges code

```
git log
git rebase -i COMMIT_HASH_BEFORE_PROBLEM
choose edit, pick, drop, etc.
do changes
git status
git add NAME_FILE
git commit --amend
git rebase --continue
git status
git push --force

```

- rename commit

```
---
git log
git rebase -i COMMIT_HASH_BEFORE_PROBLEM
choose edit, pick, drop, etc.
do changes
git status
git push --force

```

## Прибрати всі зміни

- reset робить зелені файли червоними

```
 git reset .
```

- ЛИШЕ коли зміни не закомічені:

```
git checkout .
```

прибрати всі зміни (червоні файли)

## При закінченні змін

```
master: git pull --rebase
my_branch:
   git rebase master
   git push
```

## HELP FROM REBASE

```
git rebase --abort
```

## Pозвертає останній коміт

```
git log (показує всі коміти)
git reset HEAD~ (розвертає останній коміт(будуть червоні))
```

## Всі зміни

```
git diff
(changes)
```
