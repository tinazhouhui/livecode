/**
 * Given a path, find the value of the nested object following the path
 * @param obj
 * @param {string} path example 'a.b.c'
 * @param def default value if not found
 */
export function getNested (obj, path, def = undefined) {

}

// Mastermind
// playMastermind(['red', 'blue', 'green'], ['red', 'yellow', 'green']);
// > [2, 0]
//
// playMastermind(['purple', 'cyan', 'magenta'], ['magenta', 'cyan', 'purple']);
// > [1, 2]

/**
 * Given two arrays, each containing list of colors, where the first ones are the ones to be guessed
 * and the second ones the guesses, return an array with two numbers, first representing correctly guessed position
 * as well as color, and the second correctly guessed color but not position
 * Assumption: each color can only appear once
 * Bonus: what if color can appear multiple times?
 * @param {string[]} toGuess e.g. ['red', 'blue', 'green']
 * @param {string[]} guesses e.g. ['red', 'yellow', 'green']
 * @return {number[]} guessed correct position and value, only guessed correct value, e.g. [2, 0]
 */
export function playMastermind (toGuess, guesses) {

}
