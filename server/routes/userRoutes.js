import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

// get a user
router.get("/:id", getUser);

// get all users
router.get("/", getAllUsers);

export default router;
