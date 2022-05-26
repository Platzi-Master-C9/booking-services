// External dependencies
const { Schema } = require('mongoose');
// Internal dependencies
const connection = require('../drivers/mongodb/connection');

const Chat = new Schema({
  hostId: { type: String, required: true },
  customerId: { type: String, required: true },
  placeId: { type: String, required: true },
}, { timestamps: true });

module.exports = connection.model('chats', Chat);
