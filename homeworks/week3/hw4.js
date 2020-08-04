/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
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
  if (line === reverStr(line)) {
    console.log('True');
  } else {
    console.log('False');
  }
}

reverStr = (line) => {
  let reverStr = '';
  for (let i = line.length - 1; i >= 0; i--) {
    reverStr += line[i];
  }
  return reverStr;
};
