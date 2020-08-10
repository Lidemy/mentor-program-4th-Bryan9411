/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
const request = require('request');

const process = require('process');

const apiUrl = 'https://restcountries.eu/rest/v2';
const argv = process.argv;
const name = argv[2];

request(
  `${apiUrl}/name/${name}`,
  (err, res, body) => {
    if (err) {
      console.log('get失敗:', err);
    }
    // 把 json 字串轉成物件
    const data = JSON.parse(body);
    // argv[2] 第一個參數，必須是國家名稱
    if (!name) {
      console.log('請輸入國家名稱');
    }
    // 判斷 http 狀態碼 400 ~ 504 都是錯誤訊息，找不到國家資訊
    if (data.status >= 400 && data.status <= 504) {
      console.log(`${data.status}: 找不到國家資訊`);
    }
    for (let i = 0; i < data.length; i++) {
      console.log('============');
      console.log(`國家: ${data[i].name}`);
      console.log(`首都: ${data[i].capital}`);
      console.log(`貨幣: ${data[i].currencies[0].code}`); // 陣列中第0筆的 code
      console.log(`國碼: ${data[i].callingCodes[0]}`);// 陣列中第0筆
    }
  },
);
