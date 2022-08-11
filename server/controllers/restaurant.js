import db from "../db/index.js";

export const getAllRestaurants = async (req, res) => {
  try {
    const results = await db.query("select * from restaurants");

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

export const getRestaurant = (req, res) => {
  console.log(req);
};

export const addRestaurant = (req, res) => {
  console.log(req.body);
};

export const updateRestaurant = (req, res) => {};

export const deleteRestaurant = (req, res) => {};
