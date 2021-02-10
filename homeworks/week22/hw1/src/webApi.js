import { getAuthToken } from './utils';

const BASE_URL = 'https://student-json-api.lidemy.me';

// 註冊 API
export const register = (nickname, username, password) => fetch(`${BASE_URL}/register`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    nickname,
    username,
    password,
  }),
}).then(res => res.json());

// 登入 API
export const login = (username, password) => fetch(`${BASE_URL}/login`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    username,
    password,
  }),
}).then(res => res.json());

// 驗證身分 API
export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

// 取得所有文章 API
export const getPosts = () => fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`).then(res => res.json());

// 取得單篇文章
export const getPostPage = id => fetch(`${BASE_URL}/posts/${id}`).then(res => res.json());
// 取得分頁文章 API
export const getPostFromPage = (page, limit) => fetch(
  `${BASE_URL}/posts?_page=${page}&_limit=${limit}&_sort=createdAt&_order=desc`,
).then(res => res);

// 新增文章 API
export const addPost = (title, content) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      body: content,
    }),
  }).then(res => res.json());
};
