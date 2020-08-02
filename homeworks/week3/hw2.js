/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
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
  let temp = input[0].split(' ');
  let n = Number(temp[0]);
  let m = Number(temp[1]);
  for (let i = n; i <= m; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

numCount = (n) => {
  let result = 0;
  if (n === 0) {
    return 1;
  }
  while (n !== 0) {
    n = Math.floor(n / 10);
    result++;
  }
  return result;
};

isNarcissistic = (n) => {
  let m = n;
  let total = numCount(n);
  let sum = 0;
  while (m !== 0) {
    let num = m % 10;
    sum += num ** total;
    m = Math.floor(m / 10);
  }
  if (sum === n) {
    return true;
  }
  return false;
};
