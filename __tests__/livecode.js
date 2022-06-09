import {describe, test, expect} from '@jest/globals';
import {getNested} from '../src/livecode.js';

describe('Tests', () => {
  const obj = {
    a: {
      b: {
        c: 'hello'
      }
    }
  };

  test('nested object should return existing value based on path', () => {
    expect(getNested(obj, 'a.b.c')).toEqual('hello');
  });

  test('nested object should return existing value', () => {
    expect(getNested(obj, 'a.b')).toStrictEqual({c: 'hello'});
  });

  test('nested object should return undefined if value not found', () => {
    expect(getNested(obj, 'a.b.d', '123')).toBe('123');
  });
});
