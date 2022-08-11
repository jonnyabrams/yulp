export const getAllRestaurants = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["Pizza Bastard", "Taco Bastard"],
    },
  });
};

export const getRestaurant = (req, res) => {
  console.log(req)
}