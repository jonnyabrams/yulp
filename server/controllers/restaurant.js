import db from "../db/index.js";

export const getAllRestaurants = async (req, res) => {
  try {
    
    const restaurantRatingsData = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
    );

    res.status(200).json({
      status: "success",
      results: restaurantRatingsData.rows.length,
      data: {
        restaurants: restaurantRatingsData.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurant = async (req, res) => {
  try {
    const restaurant = await db.query(
      "select * from restaurants where id = $1",
      [req.params.id]
    );

    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addRestaurant = async (req, res) => {
  try {
    const result = await db.query(
      "INSERT INTO restaurants (name, location, user_id, price_range) values ($1, $2, $3, $4) returning *",
      [req.body.name, req.body.location, req.body.user_id, req.body.price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const result = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: result.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    await db.query("DELETE FROM restaurants where id = $1", [req.params.id]);

    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

export const addReview = async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (user_id, username, restaurant_id, content, rating) values ($1, $2, $3, $4, $5) returning *",
      [
        req.body.user_id,
        req.body.username,
        req.params.id,
        req.body.content,
        req.body.rating,
      ]
    );
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};
