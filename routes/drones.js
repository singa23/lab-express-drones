const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model.js');

router.get('/', (req, res, next) => {
  Drone.find()
    .then((drones) => {
      res.render("drones/list", {
        drones
      }
      );
    })
    .catch((error) => {
      console.log("il y a eu une erreur", error);
      next(error);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
