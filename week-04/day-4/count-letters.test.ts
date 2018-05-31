'use strict';

import { test } from 'tape';
import { countLetters } from './count-letters';

test('1 length string', t => {
  let counter = countLetters('a');
  t.deepEqual(counter, { a: 1 });
  t.end();
});

test('bigger string with varied letters', t => {
  let counter = countLetters('aab');
  t.deepEqual(counter, { a: 2, b: 1 });
  t.end();
});

test('empty string', t => {
  let counter = countLetters('');
  t.deepEqual(counter, {});
  t.end();
});