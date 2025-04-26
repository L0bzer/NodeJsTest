// модуль 1:

console.log("It work's");

// модуль 2:
// 1:
const generateId = require('./id');

console.log(`New ID: ${generateId()}`)

// 2:
const ms = require('ms');
const { nanoid } = require('nanoid');

console.log(`New task ID: ${nanoid()}, it's duration is ${ms('5m')} ms.`);

//практика 2:
let dateTime = require('./date.js');

console.log(`Today is ${dateTime().date}, the current time is ${dateTime().time}.`);
