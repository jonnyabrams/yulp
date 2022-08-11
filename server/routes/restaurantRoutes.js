import express from "express";

import { getAllRestaurants } from "../controllers/restaurant.js";

const router = express.Router();

// get all restaurants
router.get("/", getAllRestaurants);

export default router;
