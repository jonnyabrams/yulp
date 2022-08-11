import express from "express";

import {
  addRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
} from "../controllers/restaurant.js";

const router = express.Router();

// get all restaurants
router.get("/", getAllRestaurants);

// get individual restaurant
router.get("/:id", getRestaurant);

// create a restaurant
router.post("/", addRestaurant);

// update a restaurant
router.put("/:id", updateRestaurant);

// delete a restaurant
router.delete("/:id", deleteRestaurant);

export default router;
