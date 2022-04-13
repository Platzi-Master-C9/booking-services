const { Schema, ObjectId } = require('mongoose');

const connection = require('../drivers/mongodb/connection');

const User = require('./user');

const Message = new Schema({
  fromUserId: { type: ObjectId, required: true, ref: User },
  toUserId: { type: ObjectId, required: true, ref: User },
  message: { type: String, lowercase: true, trim: true },
  sent: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = connection.model('message', Message);
