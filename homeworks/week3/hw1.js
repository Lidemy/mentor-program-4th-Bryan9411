/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */
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
  const n = input[0];
  for (let i = 1; i <= n; i += 1) {
    let ans = '';
    for (let m = 1; m <= i; m += 1) {
      ans += '*';
    }
    console.log(ans);
  }
}
