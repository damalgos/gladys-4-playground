const logger = require('../../utils/logger');
const { EVENTS, WEBSOCKET_MESSAGE_TYPES } = require('../../utils/constants');
const db = require('../../models');

/**
 * @description Reply to a question from the user.
 * @param {Object} originalMessage - The message sent by the user.
 * @param {string} text - The answer to send.
 * @example
 * reply(originalMessage, 'thanks!');
 */
async function reply(originalMessage, text) {
  try {
    // first, we insert the message in database
    const messageToInsert = {
      text,
      sender_id: null, // message sent by gladys
      receiver_id: originalMessage.user.id,
    };
    const messageCreated = await db.Message.create(messageToInsert);
    // send the message through websocket
    this.event.emit(EVENTS.WEBSOCKET.SEND, {
      type: WEBSOCKET_MESSAGE_TYPES.MESSAGE.NEW,
      userId: originalMessage.user.id,
      payload: messageCreated,
    });
    // then, we get the service sending the original message
    const service = this.service.getService(originalMessage.source);
    // if the service exist, we send the message
    if (service) {
      await service.message.send(originalMessage.source_user_id, text);
    }
  } catch (e) {
    logger.warn(`Unable to reply to user`);
    logger.warn(e);
  }
}

module.exports = {
  reply,
};
