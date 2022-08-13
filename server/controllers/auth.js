import bcrypt from "bcryptjs";

import db from "../db/index.js";

export const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const result = await db.query(
      "INSERT INTO users (username, email, password) values ($1, $2, $3) returning *",
      [req.body.username, req.body.email, hashedPassword]
    );

    const { password, ...others } = result.rows[0];

    res.status(201).json({
      status: "success",
      data: {
        user: others,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await db.query("select * from users where username = $1", [
      req.body.username,
    ]);

    if (user) {
      const valid = await bcrypt.compare(password, user.rows[0].password);

      if (!valid) {
        res.status(400).json("Wrong password");
      } else {
        const { password, ...others } = user.rows[0];
        res.status(200).json(others);
      }
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};
