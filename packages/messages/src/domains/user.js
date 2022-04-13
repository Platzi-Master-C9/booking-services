const { Schema } = require('mongoose');

const connection = require('../drivers/mongodb/connection');

const User = new Schema({
  name: { type: String },
  username: { type: String },
  avatar: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = connection.model('user', User);
