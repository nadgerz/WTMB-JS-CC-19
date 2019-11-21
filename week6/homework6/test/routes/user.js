/* eslint-disable */

import test from 'ava';
import request from 'supertest';
import app from '../../app';

// t is the 'execution context' / execution object
// test('Create new person', async t => {
// Each test or hook receives a different object. It contains the assertions as
// well as the methods and properties listed below.

// t.title / The test title.
// t.context / Contains shared state from hooks.
// t.plan(count) Plan how many assertion there are in the test.

// Assertions
// Assertions are mixed into the execution object provided to each test implementation
// t.truthy('unicorn')
// t.is()
// t.deepEqual()

// Assertion planning
// Assertion plans ensure tests only pass when a specific number of assertions have been executed.
// t.plan(3);

// Promise support
// test('resolves with unicorn', t => {
//   return somePromise().then(result => {
//     t.is(result, 'unicorn');
//   });
// });

// Running specific tests
// During development it can be helpful to only run a few specific tests. This can be accomplished using the .only modifier:
// test.only('will be run', t => {
// 	t.pass();
// });

// Test placeholders ("todo")
//test.todo('will think about writing this later');

// Failing tests
// // See: github.com/user/repo/issues/1234
// test.failing('demonstrate some bug', t => {
// 	t.fail(); // Test will count as passed
// });

// Skipping tests
// test.skip('will not be run', t => {
// 	t.fail();
// });

// Test context
// Hooks can share context with the test:
// test.beforeEach(t => {
// 	t.context.data = generateUniqueData().;
// });
//
// test('context data is foo', t => {
// 	t.is(t.context.data + 'bar', 'foobar');
// });

// test('Create new user', async t => {
//   t.plan(3);
//
//   const userToCreate = {
//     name: 'Armagan Amcalar',
//     age: 34,
//     meetups: [],
//   };
//
//   const res = await request(app)
//     .post('/person')
//     .send(userToCreate);
//
//   t.is(res.status, 200);
//   t.is(res.body.name, userToCreate.name);
//   t.is(res.body.age, userToCreate.age);
// });
