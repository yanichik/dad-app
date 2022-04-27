let mongoose = require("mongoose");

let activitySchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		name: String,
		description: String,
		image: String,
		address: String,
		location: { lon: Number, lat: Number },
		paid: { type: Boolean, default: false },
		price: Number,
		children: { type: Number, min: 1 },
	},
	{ timestamps: true }
);

module.exports =
	mongoose.models?.Activity || mongoose.model("Activity", activitySchema);
