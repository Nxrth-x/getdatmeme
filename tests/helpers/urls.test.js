// Fuck, I'd love to have path alias in here. :(
const { isURLValid } = require('../../src/helpers/urls')

describe(`Tests the 'src/helpers/urls' file`, () => {
  it(`Tests the 'isURLValid' with a valid url`, () => {
    const EXPECTED_RESULT = true

    const validURL = 'https://youtube.com'
    const result = isURLValid(validURL)

    expect(result).toBe(EXPECTED_RESULT)
  })

  it(`Tests the 'isURLValid' with an invalid url`, () => {
    const EXPECTED_RESULT = false

    const invalidURL = 'htt://g.a.nullPointerException'
    const result = isURLValid(invalidURL)

    expect(result).toBe(EXPECTED_RESULT)
  })
})
