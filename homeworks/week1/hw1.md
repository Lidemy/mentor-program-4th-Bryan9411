## 交作業流程

### 設定 GitHub 專案

1. 透過 GitHub classroom 連結把檔案複製一份課綱到自己本地端
2. 透過指令 `git branch - <branch 名稱>` 建立一個新的 branch
3. 接著透過指令 `git checkout - <branch 名稱>`切換到剛剛新建立的 branch

### 寫作業

1. 先切換到新建立的 branch 後，打開本地端的 hw.md 檔案寫作業
2. 提交作業前先檢查是否完成需求，及看過當週自我檢討並修正

   > 注意！！一定要在新建立的 branch 上寫作業

### 交作業
> 假設 week1 裡面有 6 道題目，全部完成後在 push 上去
1. 作業全部完成後，透過指令 `git commit -am < commit 名稱>` 上傳一個版本
2. 接著再把這新建立的 branch 給 push 到 GitHub 上面，透過 `git push origin <branch 名稱>`
3. push 上去之後，到自己的 GitHub 點 `pull request` 把剛剛新建立的 branch 給 `merge` 到原本的 master
4. 接著到學習系統的作業列表，新增作業然後送出。
   > 新增作業裡面的 PR 連結，就是 GitHub 上的 `pull request` 連結
5. 作業沒問題的話，助教批改完會幫我們 merge ，並刪掉 GitHub 上的 branch
6. 回到本機，透過指令 `git checkout - master>` 切回 master ，再 `git pull origin master`，讓自己的 master 與 GitHub 上同步
7. 最後再透過指令 `git branch -d <branch 名稱>` 把自己一開始新建立的 branch 刪掉
8. 完成