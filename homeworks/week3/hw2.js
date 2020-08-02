/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
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
  const line = input[0];
  const temp = line.split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
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
    const m = n;
    m = Math.floor(n / 10);
    result++;
  }
  return result;
};

isNarcissistic = (n) => {
  const m = n;
  const total = numCount(n);
  let sum = 0;
  while (m !== 0) {
    const num = m % 10;
    sum += num ** total;
    m = Math.floor(m / 10);
  }
  if (sum === n) {
    return true;
  }
  return false;
};
