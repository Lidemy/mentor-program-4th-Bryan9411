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
  for (let i = 1; i < input.length; i++) {
    let isPrime = true;
    if (Number(input[i]) === 1) {
      isPrime = false;
    }
    for (let m = 2; m < Number(input[i]); m++) {
      if (Number(input[i]) % m === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log('Prime');
    }
    console.log('Composite');
  }
}
