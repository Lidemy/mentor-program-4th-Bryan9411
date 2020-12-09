## Webpack 是做什麼用的？可以不用它嗎？
Webpack 是一個專門打包模組檔案的工具，利用 Webpack 提供的 loders 來 編譯各種模組打包成一個檔案，就可以放到瀏覽器上執行。
用不用 Webpack 都是可以的，因為現階段瀏覽器有一個東西叫做 ES Modules，它可以支援 import 與 export 的模組，但 Webpack 在業界上比較常使用，功能上也比較方便，所以還是建議使用它。

## gulp 跟 webpack 有什麼不一樣？
* gulp：主要用來管理任務

* webpack：主要用來將模組打包

  gulp 與 webpack 兩者都可以將檔案資源做轉換，最大差異在於 webpack 在檔案資源轉換後會順便把檔案給打包在一起。

## CSS Selector 權重的計算方式為何？
基本權重大小：
inline style > ID > Class > Element > *

`*`：
權重最小，為0-0-0-0，所以只要權重超過就可以覆蓋它

`Element`：
像是`div`、`ul`、`li`、`header`、`footer`...等，所有 Element 的權重都是 0-0-0-1

`class`：
每一個 class 的權重都是 0-0-1-0

`id`：
每一個 class 的權重都是 0-1-0-0

`inline style`：
就是寫在 html 行內裡面的 style，所有 inline style 的權重為 1-0-0-0

ex:

* ul > li 兩個 element ，加起來是 0-0-0-2
* ul > li > a 三個 element ，加起來是 0-0-0-3
* ul > li .box 兩個 element 和一個 class ，所以加起來是 0-0-1-2