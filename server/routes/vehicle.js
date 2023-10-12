const express = require('express');
const router = express.Router();
const passport = require('passport'); // Ensure user authentication before accessing vehicle listings

// Import your Vehicle model
const Vehicle = require('../models/Vehicle');

// Get user's vehicle listings
router.get(
  '/vehicles',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const userVehicles = await Vehicle.find({ user: req.user._id });
      res.json(userVehicles);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user vehicles' });
    }
  }
);

// Create a new vehicle listing
router.post(
  '/vehicles',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { make, model, year, availableForRent } = req.body;

    // Build vehicle object
    const vehicleFields = {};
    vehicleFields.user = req.user._id;
    if (make) vehicleFields.make = make;
    if (model) vehicleFields.model = model;
    if (year) vehicleFields.year = year;
    if (availableForRent) vehicleFields.availableForRent = availableForRent;

    try {
      const newVehicle = new Vehicle(vehicleFields);
      await newVehicle.save();
      res.json(newVehicle);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
