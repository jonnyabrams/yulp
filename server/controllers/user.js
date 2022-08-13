import bcrypt from "bcryptjs";

import db from "../db/index.js";

export const updateUser = async (req, res) => {
  if (req.body.id === req.params.id) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const result = await db.query(
        "UPDATE users SET username = $1, email = $2, password = $3 where id = $4 returning *",
        [req.body.username, req.body.email, req.body.password, req.params.id]
      );

      res.status(200).json({
        status: "success",
        data: {
          user: result.rows[0],
        },
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(403).json("You can only update your own account");
  }
};

export const deleteUser = async (req, res) => {
  if (req.body.id === req.params.id) {
    try {
      await db.query("DELETE FROM users where id = $1", [req.params.id]);
  
      res.status(204).json({
        status: "success",
      });
    } catch (error) {
      console.log(error);
    } 
  } else {
    res.status(403).json("You can delete only your account!");
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const results = await db.query("select * from users");

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const result = await db.query("select * from users where id = $1", [
      req.params.id,
    ]);

    res.status(200).json({
      status: "success",
      data: {
        user: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};
