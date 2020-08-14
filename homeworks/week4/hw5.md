## 請以自己的話解釋 API 是什麼
API是一種溝通的方式，例如說現在很多網站都為了方便註冊，都有提供 Facebook 登入 或者是 Google 登入這兩種方式，因為只是需要他們的登入方式，而他們也不可能把整個網站的資料都給你，只會借出你需要的資料給你做串接，而這些借給你的資料就是 API 。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
### 成功回應：200 ~ 299
<br>

 `200 ok` ：成功 <br><br>
 `201 created`：請求成功且新資源也新增成功<br><br>
 `202 Accepted`：請求成功，但尚未被處理

### 重定向：300 ~ 399
<br>

`300 Multiple choice`：擁有一個以上的回應，應從中選擇一個<br><br>
`301 Moved Permanently`：Url 已經被改變
###  用戶端錯誤：400 ~ 499
<br>

`400 Bad Request`：因為語法錯誤，伺服器無法解析這段語法<br><br>
`401 Unauthorized`：未經過授權，需要授權來回應請求<br><br>
`403 Forbidden`：沒有訪問權限，像是未被授權，不同401，伺服器知道用戶端身分<br><br>
`404 Not Found`：找不到資料<br><br>
`409 Conflic`：請求與伺服器狀態衝突
###  伺服器端錯誤：500 ~ 599
<br>

`500 Internal Sever Error`：發生未知的錯誤<br><br>
`505 HTTP Version Not Supported`：Http 版本不被伺服器支援



## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base Url: http://restaurant.com

說明             |Method| Path      | 參數 | 範例 
----------------| ----- |-----------|------|------|------------------------
回傳所有餐廳資料 | GET   | /restaurants | _limit: 限制回傳資料數量 | /restaurants?_limit=10
回傳單一餐廳資料 | GET   | /restaurants/:id | 無 | /restaurants/10
刪除餐廳	    | DELETE | /restaurants/:id | 無 | /restaurants/10 | 
新增餐廳        | POST | /restaurants | name: 餐廳名稱 | 無 |
編輯餐廳        | PATCH | /restaurants/:id | name: 餐廳名稱 | 無 |