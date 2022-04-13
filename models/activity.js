// let mongoose = require("mongoose");
import mongoose from "mongoose";

let activitySchema = new mongoose.Schema(
	{
		_id: mongoose.Schema.Types.ObjectId,
		name: String,
		similarActivities: [
			{ type: mongoose.Schema.Types.ObjectId, ref: "Activity" },
		],
		geography: { lon: Number, lat: Number },
		activityType: String,
		coverImage: String,
		images: [String],
		dadList: [String],
		equipmentList: [String],
		numberOfKids: { from: Number, to: Number },
		paid: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

// module.exports = mongoose.model('Activity', activitySchema);
// export default mongoose.model("Activity", activitySchema);
const Activity = mongoose.model("Activity", activitySchema);
export default Activity;
