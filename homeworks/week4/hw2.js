/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
const request = require('request');

const process = require('process');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';
const argv = process.argv;
const start = argv[2];
const parameter = argv[3];

// 前 20 本 name 和 id
function listBook() {
  request(`${baseUrl}/books?_limit=20`,
    (err, res, body) => {
      if (err) {
        console.log('get失敗:', err);
        return;
      }
      const data = JSON.parse(body);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].id, data[i].name);
      }
      return;
    });
}
// listBook(); //測試

// 輸出 id 為1的書籍
function read(id) {
  request(
    `${baseUrl}/books/${id}`,
    (err, res, body) => {
      if (err) {
        console.log('get失敗:', err);
        console.log(res);
        return;
      }
      if (body === '{}') {
        console.log('沒有此編號');
      }
      const data = JSON.parse(body);
      console.log(data);
      return;
    },
  );
}

// read(1); //輸出測試

// 刪除 id 為1的書籍
function del(id) {
  request.delete(
    `${baseUrl}/books/${id}`,
    (err, res, body) => {
      if (err) {
        console.log('刪除失敗:', err);
        console.log(res);
        return;
      }
      if (body === '{}') {
        console.log('此編號已被刪除');
      } else {
        console.log('刪除成功');
      }
    },
  );
}

// del(1); //刪除測試

// 新增一本名為 I love coding 的書
function create(name) {
  request.post(
    {
      url: `${baseUrl}/books`,
      form: {
        name: `${name}`,
      },
    }, (err, res) => {
      if (err) {
        console.log('新增失敗:', err);
        console.log(res);
        return;
      }
      console.log('新增成功');
    },
  );
}
// create('I love coding'); //新增測試

// 更新 id 為 1 的書名為 new name
function update(id, name) {
  request.patch(
    {
      url: `${baseUrl}/books/${id}`,
      form: {
        name: `${name}`,
      },
    }, (err, res, body) => {
      if (err) {
        console.log('更新失敗:', err);
        console.log(res);
        return;
      }
      if (body === '{}') {
        console.log('此編號已被刪除');
      } else {
        console.log('更新成功');
      }
    },
  );
}

// update(4, '王子變青蛙');

// 接受參數，輸出相對應的結果
switch (start) {
  case 'list':
    listBook();
    break;
  case 'read':
    read(parameter);
    break;
  case 'del':
    del(parameter);
    break;
  case 'create':
    create(parameter);
    break;
  case 'update':
    update(parameter, argv[4]);
    break;
  default:
    console.log('請輸入參數: list, read, del, create, update');
}
