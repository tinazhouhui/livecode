import {describe, test, expect} from '@jest/globals';
import {sayHello} from '../index.js';

describe('Tests', () => {
  test('sayHello should return a string', () => {
    const hello ='hello'
    expect(sayHello()).toBe('Hi Powster!');
  })
})