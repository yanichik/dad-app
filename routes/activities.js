const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const Activity = require('../models/activity');

router.get('/:id', async (req, res) => {
  try {
    let activity = await Activity.findById(req.params.id)

    if (activity == null) {
      return res.status(404).json({ message: 'Cant find activity'})
    } else {
      res.status(200).json(activity)
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
})

router.get('/', async (req, res) => {
  try {
    let events = await Activity.find()

    res.status(200).json(events)
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
})

module.exports = router