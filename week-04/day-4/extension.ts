'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  if (Math.max(a, b, c) === a) {
    return a;
  } else if (Math.max(a, b, c) === b) {
    return b;
  } else {
    return c;
  }
};

export function median(pool: number[]): number {
  pool.sort(function compareNumbers(a, b) {
    return a - b;
  });
  return pool[Math.floor((pool.length - 1) / 2)];
}

export function isVowel(c: string): boolean {
  let vowels: string = 'aouie'
  return vowels.indexOf(c) !== -1;
}

export function translate(hungarian: string): string {
  let teve = hungarian;
  let length = teve.length;

  for (let i = 0; i < length; i++) {
    let c = teve[i];
    if (isVowel(c)) {
      teve = teve.split(c).join(`${c}v${c}`);
      i += 2;
      length += 2;
    }
  }
  return teve;
}