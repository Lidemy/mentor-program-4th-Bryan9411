## 什麼是 Ajax？
Ajax 全名即「Asynchronous JavaScript and XML」（非同步的 JavaScript 與 XML 技術），是一套涵蓋多項技術的瀏覽器端網頁開發技術。

## 用 Ajax 與我們用表單送出資料的差別在哪？
Form：當送出表單時就會向伺服器傳送一個請求，伺服器接收並處理後，傳回一個新的網頁（頁面需要刷新）。

Ajax：Ajax 可以向伺服器傳送並馬上取回必須的資料，無需等待伺服器的回應時間（頁面無需刷新）。

## JSONP 是什麼？
因為「同源政策」關係，利用 html 不受「同源政策」影響的 `<script>` 標籤特性，並透過 JavaScript 來讀取資料。

## 要如何存取跨網域的 API？
利用跨來源資源共享（CORS)，在 response 的 header 加上 Access-Control-Allow-Origin。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
在第四週使用 Node.js ，因為不透過瀏覽器關係，因此不受同源政策的影響。

這週透過瀏覽器發送，因為跨來源且有安全性問題，因此受同源政策的影響。
