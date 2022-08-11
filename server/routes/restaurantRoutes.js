import express from "express";

import { getAllRestaurants, getRestaurant } from "../controllers/restaurant.js";

const router = express.Router();

// get all restaurants
router.get("/", getAllRestaurants);

// get individual restaurant
router.get("/:id", getRestaurant);

export default router;
