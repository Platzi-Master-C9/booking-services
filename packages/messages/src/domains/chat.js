const { Schema, ObjectId } = require('mongoose');

const connection = require('../drivers/mongodb/connection');

const User = require('./user');
const Message = require('./message');

const Chat = new Schema({
  hostId: { type: ObjectId, required: true, ref: User },
  customerId: { type: ObjectId, required: true, ref: User },
  messageId: { type: ObjectId, required: true, ref: Message },
  place: {
    placeId: { type: ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image_url: { type: String, require: true },
  },
}, { timestamps: true });

module.exports = connection.model('chat', Chat);
