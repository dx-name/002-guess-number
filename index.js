#!/usr/bin/env node
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MIN = 0;
const MAX = 100;
const secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

console.log(`Загадано число в диапазоне от ${MIN} до ${MAX}`);

rl.on('line', (input) => {
  const guess = Number.parseInt(input.trim(), 10);

  if (Number.isNaN(guess)) {
    console.log('Пожалуйста, введите целое число.');
    return;
  }

  if (guess < secretNumber) {
    console.log('Больше');
  } else if (guess > secretNumber) {
    console.log('Меньше');
  } else {
    console.log(`Отгадано число ${secretNumber}`);
    rl.close();
  }
});

rl.on('close', () => process.exit(0));
