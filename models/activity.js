let mongoose = require('mongoose');

let activitySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  address: String,
  location: { lon: Number, lat: Number },
  paid: { type: Boolean, default: false },
  price: Number,
  children: { min: Number, max: Number }
},{ timestamps: true });

module.exports = mongoose.models?.Activity || mongoose.model('Activity', activitySchema);