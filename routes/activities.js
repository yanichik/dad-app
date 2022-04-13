// const mongoose = require("mongoose");
import mongoose from "mongoose";
// const express = require("express");
import express from "express";

const activitiesRouter = express.Router();

import Activity from "../models/activity.js";

// READ all activities
activitiesRouter.get("/", async (req, res) => {
	try {
		const activities = await Activity.find();

		res.json(activities);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// READ activity
activitiesRouter.get("/:id", getActivity, async (req, res) => {
	res.json(res.activity);
});

// Configure shared middleware

async function getActivity(req, res, next) {
	try {
		let activity = await Activity.findById(req.params.id);

		if (activity == null) {
			return res.status(404).json({ message: "Cant find activity" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}

	res.activity = activity;
	next();
}

// module.exports = activitiesRouter;

export default activitiesRouter;
