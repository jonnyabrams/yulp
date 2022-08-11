export const getAllRestaurants = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["Pizza Bastard", "Taco Bastard"],
    },
  });
};
