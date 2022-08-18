import express from "express";

import {
  addRestaurant,
  addReview,
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

// add review
router.post("/:id/add-review", addReview);

export default router;
