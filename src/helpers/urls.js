/**
 * Checks if a URL is valid
 *
 * @param {string} url URL to be verified
 * @returns {boolean} Boolean value indicating if the URL is valid or not
 */
const isURLValid = url => {
  const pattern =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

  return pattern.test(url)
}

module.exports = {
  isURLValid,
}
