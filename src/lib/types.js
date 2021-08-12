/**
 * Base interface for a Discord channel type
 *
 * @typedef ChannelType
 * @property {(message: string) => void} send Sends a message in a given discord server
 */

/**
 * Base interface for a Discord server type
 *
 * @typedef ServerType
 * @property {ChannelType} channel Base representation of a discord channel
 */

/**
 * Base interface for the Meme time
 *
 * **about:** The meme time is an abstraction representing
 * the timestamp of the meme in a given video
 *
 * @typedef MemeTimeType
 * @property {number} start Beginning of the meme in seconds
 * @property {number} end End of the meme in seconds
 */

/**
 * @typedef MemeType
 * @property {string} _id Meme identifier
 * @property {string} url Video url of the given meme
 * @property {string} file ??? :(
 * @property {MemeTimeType} [time] Timestamp of the meme
 */
