## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
`<time>`：語意化標籤，讓電腦知道這裡是在講時間

`<hr>`：能夠添加一條水平分隔線

`<code>`：在網頁上顯示一段程式碼

## 請問什麼是盒模型（box modal）
盒模型就像一個盒子概念一樣，除了本身的寬高外，還包含`padding`、`margin `以及邊框`border `，這些元素都會影響整個寬高。

![avatar](https://upload.cc/i1/2020/08/23/bEc8Pl.png)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
`<display:block>`：左右稱滿，可自行設定寬高。 例如: `<div>`、`<p>`、`<h1>`、`<ul>`

`<display:inline>`：讓圖片與文字均不換行。 例如: `<a>`、`<span>`、`<img>`

`<display:inline-block>`：對外可併排，對內可以設定元素寬高。 例如: `<button>`、`<select>`

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
`<position:static>`：根據瀏覽器預設的配置自動排版在頁面上，也可當作取消定位的一種方式

`<position:relative>`：相對定位，可讓元素相對原位置調整移動

`<position:absolute>`：絕對定位，定位在上層被寫下 relative 這語法的元素，如果沒有寫的話，預設是在 `<body>`

`<position:fixed>`：根據瀏覽器視窗來定位，固定在同一位置