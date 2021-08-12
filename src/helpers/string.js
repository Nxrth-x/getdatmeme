/**
 * Return a string escaping all characters.
 * @param {string} string
 * @returns {string}
 */
function escapeString(string) {
  let escapedString = ''

  for (const character of string) {
    escapedString += `\\${character}`
  }

  return escapedString
}

module.exports = {
  escapeString,
}
