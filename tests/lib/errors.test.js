const errors = require('../../src/lib/errors')
require('../../src/lib/types')

// Mocking the global console to
// run the tests with
global.console = {
  log: jest.fn(),
}

describe(`Tests the 'errors' file`, () => {
  /**
   * Mocked server instance
   * @type {ServerType}
   */
  const SERVER_INSTANCE = {
    channel: {
      send: message => console.log(message),
    },
  }

  it(`Tests the function 'noSongToSkipError'`, () => {
    errors.noSongToSkipError(SERVER_INSTANCE)

    expect(global.console.log).toHaveBeenCalledWith(
      'There is no song that I could skip!'
    )
  })

  it(`Tests the function 'botDoesNotHavePermissionsError'`, () => {
    errors.botDoesNotHavePermissionsError(SERVER_INSTANCE)

    expect(global.console.log).toHaveBeenCalledWith(
      'I need the permissions to join and speak in your voice channel!'
    )
  })

  // TODO - Add the rest of the tests
  // Not as important though, It'd be just
  // a console.log anyways
})
