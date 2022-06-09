/**
 * @param obj
 * @param {string} path example 'a.b.c'
 * @param def default value if not found
 */
export function getNested (obj, path, def = undefined) {
  // parse the string -> pathElements
  const pathElements = path.split('.');
  for (const pathElement of pathElements) {
    // loop through the pathElements and access object
    obj = obj[pathElement];
    // if not - return undefined
    if (obj === undefined) return def;
  }
  return obj;
}

// color guessing game
// playMastermind(['red', 'blue', 'green'], ['red', 'yellow', 'green']);
// > [2, 0]
//
// playMastermind(['purple', 'cyan', 'magenta'], ['magenta', 'cyan', 'purple']);
// > [1, 2]

export function playMastermind (toGuess, guesses) {
  // get the correct position and value
  let numberOfColors = toGuess.length;
  let bothCorrect = 0;
  let valueCorrect = 0;
  for (let i = 0; i < numberOfColors; i++) {
    if (toGuess[i] === guesses[i]) {
      bothCorrect += 1;
      // delete them from both arrays
      toGuess.splice(i, 1);
      guesses.splice(i, 1);
      i--;
      numberOfColors--;
    }
  }
  // what is left in toGuess includes any of the left guesses
  for (const color of guesses) {
    if (toGuess.includes(color)) {
      valueCorrect += 1;
    }
  }
  return [bothCorrect, valueCorrect];
}
