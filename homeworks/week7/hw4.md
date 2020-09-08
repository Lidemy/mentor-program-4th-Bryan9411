## 什麼是 DOM？
DOM是一個樹狀架構，主要是將 Document 架構為一個樹的概念，而樹的組成就是 document 的節點，每個元素在 DOM 裡面就是一個節點。
例如：`const title = document.queryselector('.title')`，這個 `.title` 就是 DOM元素。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
當 DOM 傳遞過程中，從 document 到目標節點的過程就是捕獲階段，而從目標節點再傳回 document 的過程路徑則是冒泡階段。

監聽事件第三個參數可以設定 `true` or `false`，如果要加在捕獲，參數就要加上 true，反之，如果要加在冒泡階段，參數則是 false。特別的是如果一個節點加上了兩個監聽事件，那這監聽事件就會根據程式的執行順序來跑，

## 什麼是 event delegation，為什麼我們需要它？
event delegation 又稱作事件代理，假設一個區塊底下有好幾個 `input`，想要針對這些 `input`進行監聽時，會遇到設置過多監聽事件的情況，這時就可以透過 `event delegation`事件代理方式，監聽父節點，只要監聽父節節點就可以知道底下節點的狀況。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`event.preventDefault()`：取消預設行為，例如一個`a`連結，想要讓他點了不會跳轉頁面，就可以使用 preventDefault 來取消預設行為。

`event.stopPropagation()`：停止傳遞，例如點擊`a`連結，`a`連結後的冒泡都會停止傳遞，如果有監聽事件加在冒泡階段，就不會進行動作。