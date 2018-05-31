'use strict';

import { test } from 'tape';
import { fibonacci } from './fibonacci';

test('generic test', t => {
  let n = 5;
  let expected = 8;
  let result = fibonacci(n);
  t.equal(result, expected);
  t.end()
})

test('negative number', t => {
  let n = -5;
  let expected = -1;
  let result = fibonacci(n);
  t.equal(result, expected);
  t.end()
})

test('string', t => {
  let n = 'I like powerpuff girls';
  let expected = -1;
  let result = fibonacci(n);
  t.equal(result, expected);
  t.end()
})

test('float number', t => {
  let n = 5.532;
  let expected = 8;
  let result = fibonacci(n);
  t.equal(result, expected);
  t.end()
})