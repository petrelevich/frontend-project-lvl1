#!/usr/bin/env node

import inputUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = inputUserName();
console.log(`Hello, ${userName}!`);
