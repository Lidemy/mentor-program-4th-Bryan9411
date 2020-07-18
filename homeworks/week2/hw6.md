``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 建立一個可以輸入陣列的 function isValid
2. 給他一個迴圈，從0開始進行，如果小於 arr 的長度，就執行迴圈裡的判斷式
3. 如果 arr[ i ] 小於或等於 0 的話，就回傳 'inValid'，並 i + 1，直到判斷式結果是 false 時，跳出迴圈
4. 接著再給他一個迴 圈從 i = 2 開始進行，如果小於 arr 的長度，就執行 此迴圈裡的判斷式
5. 如果 arr[ i ] 不等於 arr[ i-1 ] + arr[ i-2 ]時，就回傳 'inValid'，並 i + 1
6. 直到 arr[ i ] 等於 arr[ i-1 ] + arr[ i-2 ]時，就回傳 'valid'