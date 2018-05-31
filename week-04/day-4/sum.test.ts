'use strict';

import { test } from 'tape';
import { lotsOfNumbers } from './sum';

test('simple list input', t => {
  const testList: number[] = [1, 2, 3, 4, 5];
  const expected: number = 15;
  lotsOfNumbers.numList = testList;
  const actual = lotsOfNumbers.sum();
  t.equal(actual, expected);
  t.end();
})

test('empty list input', t => {
  const testList: number[] = [];
  const expected: number = 0;
  lotsOfNumbers.numList = testList;
  const actual: number = lotsOfNumbers.sum();
  t.equal(actual, expected);
  t.end();
})

test('one element list input', t => {
  const testList: number[] = [5];
  const expected: number = testList[0];
  lotsOfNumbers.numList = testList;
  const actual: number = lotsOfNumbers.sum();
  t.equal(actual, expected);
  t.end();
})

test('null input', t => {
  const testList: number[] = [null];
  const expected: number = 0;
  lotsOfNumbers.numList = testList;
  const actual: number = lotsOfNumbers.sum();
  t.equal(actual, expected);
  t.end();
})

test('string input', t => {
  const testList = ['string'];
  const expected: number = 0;
  lotsOfNumbers.numList = testList;
  const actual: number = lotsOfNumbers.sum();
  t.equal(actual, expected);
  t.end();
})