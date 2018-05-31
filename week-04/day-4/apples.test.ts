'use strict';

import { test } from 'tape';
import { appleBasket } from './apples';

test('getApple() returns apple', t => {
  const expected: string = 'apple';
  const actual: string = appleBasket.getApples();

  t.equal(actual, expected);
  t.end();
})
