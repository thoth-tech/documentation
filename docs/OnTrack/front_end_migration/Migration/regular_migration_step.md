# You should do this after Create the Branch and Finish the Initial Migration

> Trimester 2 2022 – SIT374

## Ensure you have your author credentials set up

You should ensure your git user config details are set to the email address you use with GitHub:

```shell
git config --global user.email "my-github-email@gmail.com"
git config --global user.name "Freddy Smith"
```

## Workflow Summary

**Step 1.** Set up for new feature branch:

````shell
git checkout development                # make sure you are on develop
git pull --rebase upstream development  # sync your local develop with upstream's develop
git fetch thoth
git checkout -b my-new-branch           # create your new feature branch```
````

**Step 2.** Make changes, and repeat until you are done:

````shell
git add ...
git commit
git push     # make changes, commit, and push to origin```
````

**Step 3.** Submit a pull request and if unable to merge:

```shell
git pull --ff upstream development # merge upstream's develop in your feature branch
git add ...
git commit           # resolve merge conflicts and commit
git push origin                    # push your merge conflict resolution to origin
```
