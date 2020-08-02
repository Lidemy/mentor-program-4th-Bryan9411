/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
/* eslint-disable-next-line */
	solve(lines);
});

function solve(input) {
  for (let i = 1; i < input.length; i++) {
    console.log(determine(input[i]));
  }
}

// if 比大
compareBig = (a, b, maxa, maxb) => {
  if (a > b) return 'A';
  if (a < b) return 'B';
  if (maxa === maxb) return 'DRAW';
  if (a === b) return maxa > maxb ? 'A' : 'B';
};

// if 比小
compareSmall = (a, b, maxa, maxb) => {
  if (a > b) return 'B';
  if (a < b) return 'A';
  if (maxa === maxb) return 'DRAW';
  if (a === b) return maxa < maxb ? 'A' : 'B';
};

// 判斷 k = 1 or -1
determine = (str) => {
  const arr = str.split(' ');
  const a = arr[0].length;
  const b = arr[1].length;
  const c = arr[0];
  const d = arr[1];
  const k = Number(arr[2]);
  if (k === 1) return compareBig(a, b, c, d);
  if (k === -1) return compareSmall(a, b, c, d);
};
