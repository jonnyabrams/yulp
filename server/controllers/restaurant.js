export const getAllRestaurants = (req, res) => {
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
