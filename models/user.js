let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  password: String,
  token: String,
  shortlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
  blacklist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }]
},{ timestamps: true });

module.exports = mongoose.model('User', userSchema);
