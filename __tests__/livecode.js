import {describe, test, expect} from '@jest/globals';
import {getNested, playMastermind} from '../src/livecode.js';

describe('Tests', () => {
  const obj = {
    a: {
      b: {
        c: false
      }
    }
  };

  test('nested object should return existing value based on path', () => {
    expect(getNested(obj, 'a.b.c')).toEqual(false);
  });

  test('nested object should return existing value', () => {
    expect(getNested(obj, 'a.b')).toStrictEqual({c: false});
  });

  test('nested object should return undefined if value not found', () => {
    expect(getNested(obj, 'a.b.d', '123')).toBe('123');
  });

  describe('PlayMastermind', () => {
    test('should return correctly when guessed both position and color', () => {
      const toGuess = ['red', 'blue', 'green'];
      const guesses = ['red', 'yellow', 'green'];
      expect(playMastermind(toGuess, guesses)).toStrictEqual([2, 0]);
    });

    test('should return correctly when guessed position and color', () => {
      const toGuess = ['purple', 'cyan', 'magenta'];
      const guesses = ['magenta', 'cyan', 'purple'];
      expect(playMastermind(toGuess, guesses)).toStrictEqual([1, 2]);
    });

    test('should return correctly when multiple colors', () => {
      const toGuess = ['blue', 'blue', 'red'];
      const guesses = ['red', 'red', 'green'];
      expect(playMastermind(toGuess, guesses)).toStrictEqual([0, 1]);
    });
  });

});
