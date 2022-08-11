import db from "../db/index.js";

export const getAllRestaurants = async (req, res) => {
  const results = await db.query("select * from restaurants");
  console.log(results);

  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["Pizza Bastard", "Taco Bastard"],
    },
  });
};

export const getRestaurant = (req, res) => {
  console.log(req);
};

export const addRestaurant = (req, res) => {
  console.log(req.body);
};

export const updateRestaurant = (req, res) => {};

export const deleteRestaurant = (req, res) => {};
