<!--
 * Author  rhys.zhao
 * Date  2023-01-24 09:51:11
 * LastEditors  rhys.zhao
 * LastEditTime  2023-03-30 09:39:14
 * Description
-->

# git

## 1. 说说对 git pull 和 git fetch 的理解？有什么区别？

`git pull` 等同于 `git fetch`加上`git merge`。

`git pull --rebase` 等同于 `git fetch`加上`git rebase`。

日常写代码推荐使用`git pull --rebase`, rebase 可以让我们的分支成一条直线，能够方便查看代码历史。

## 2. 说说你对 git stash 的理解？应用场景？

`git stash`将更改的内容暂存。

`git stash pop`将更改的内容取回来。

比较常见的一个场景，开发了一半，需要同步远程代码。我们可以先把开发一半的代码暂存，同步远程代码，然后再把暂存代码取出来。

```git
git stash
git pull
git stash pop
```

## 3. 说说你对 git rebase 和 git merge 的理解？区别？

日常写代码推荐`git rebase`,可以让我们的分支成一条直线，便于查看代码历史。

## 4. 说说 git 发生冲突的场景？如何解决？

当不同用户修改同一个文件的时候就会发生冲突。

处理冲突，需要根据具体场景来处理。可以保存任何一个用户的代码，也可以二者代码都保存。
