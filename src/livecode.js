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
    obj = obj[pathElement]
    // if not - return undefined
    if (obj === undefined) return def;
  }
  return obj;
}
