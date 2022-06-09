import {describe, test, expect} from '@jest/globals';
import {sayHello} from '../src/sayHello.js';

describe('Tests', () => {
  test('sayHello should return a string', () => {
    expect(sayHello()).toBe('Hi Powster!');
  });
});
