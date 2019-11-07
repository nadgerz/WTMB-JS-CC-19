/* eslint-disable */
// console.log( 'hello Debora! 😀' );
const Person = require('./person.js');
const Meetup = require('./meetup');
const Chalk = require('chalk');
const Database = require('./database');

const add = (...args) => {
  return args.reduce((acc, cur) => acc + cur);
};

const additionResult = add(5, 7);

const multiply = (...args) => {
  return args.reduce((acc, cur) => acc * cur);
};
const multiplyResult = multiply(additionResult, 2);

// const mert = new Person( 'Mert', 34 );
// const armagan = new Person( 'Armagan', 35 );
//
// const wtmb = new Meetup( 'WTM Berlin' );
// armagan.attend( wtmb );
// mert.attend( wtmb );

// console.log( Chalk.green.bgBlack( ' hello ' ) );
// console.log( Chalk.green.bgBlack( wtmb.printAttendeeNames() ) );

// Database.save( 'meetup.json', wtmb );
// saving multiple people!
// Database.save( 'persons.json', [mert, armagan] );
const loadedFile = Database.load('meetup.json');
console.log(loadedFile.name);

const wtmb = Meetup.create(loadedFile);
