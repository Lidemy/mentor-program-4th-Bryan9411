/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    const data = JSON.parse(body);
    if (response === error) {
      return console.log('get失敗:', error);
    }
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id, data[i].name);
    }
    return;
  },
);
