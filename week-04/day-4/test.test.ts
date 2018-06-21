'use strict';

import { test } from 'tape';
import { addNum, subNum } from './test';

test('add 2 numbers', t => {
  const actual = addNum(1, 2);
  const expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('test subNum()', t => {
  t.equal(subNum(2, 1), 1);
  t.end();
})