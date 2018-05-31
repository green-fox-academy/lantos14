'use strict';

import { test } from 'tape';
import { isAnagram } from './anagram';

test('generic test', t => {
  const testString1: string = 'lantos';
  const testString2: string = 'talnos';
  let expected = true;
  let actual = isAnagram(testString1, testString2);
  t.equal(actual, expected);
  t.end();
})

test('false test', t => {
  const testString1: string = 'lantos';
  const testString2: string = 'talnos';
  let expected = true;
  let actual = isAnagram(testString1, testString2);
  t.equal(actual, expected);
  t.end();
})