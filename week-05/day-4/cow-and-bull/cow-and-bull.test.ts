'use strict';

import { test } from 'tape';
import { CowAndBull } from './cow-and-bull';

test('Creatin class object', t => {
  const testClass: CowAndBull = new CowAndBull;
  t.equal(testClass.guesses, 0);
  t.equal(testClass.state, 'solved');
  t.end();
})