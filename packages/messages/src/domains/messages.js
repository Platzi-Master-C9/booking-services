// External dependencies
const { Schema, ObjectId } = require('mongoose');
// Internal dependencies
const ChatModel = require('./chats');
const connection = require('../drivers/mongodb/connection');

const Message = new Schema({
  chatId: { type: ObjectId, require: true, ref: ChatModel },
  text: { type: String, lowercase: true, trim: true },
  createdBy: { type: String, required: true },
});

module.exports = connection.model('messages', Message);
