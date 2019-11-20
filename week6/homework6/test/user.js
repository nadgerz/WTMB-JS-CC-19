import test from 'ava';
import request from 'supertest';
import app from '../app';


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
//   t.plan(3);
