require('./types')

/**
 *
 * @param {ServerType} server
 * @param {string} message
 */
const errorHandler = (server, message) => {
  server.channel.send(message)
}

const playMusicWithoutBeingOnAVoiceChannelError = server => {
  errorHandler(server, 'You need to be in a voice channel to play music!')
}

const botDoesNotHavePermissionsError = server => {
  errorHandler(
    server,
    'I need the permissions to join and speak in your voice channel!'
  )
}

const stopMusicWithoutBeingOnAVoiceChannelError = server => {
  errorHandler(server, 'You have to be in a voice channel to stop the music!')
}

const noSongToSkipError = server => {
  errorHandler(server, 'There is no song that I could skip!')
}

const invalidCommandError = server => {
  errorHandler(server, 'You need to pass a valid command.')
}

module.exports = {
  playMusicWithoutBeingOnAVoiceChannelError,
  botDoesNotHavePermissionsError,
  stopMusicWithoutBeingOnAVoiceChannelError,
  noSongToSkipError,
  invalidCommandError,
}
