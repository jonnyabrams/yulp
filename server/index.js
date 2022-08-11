import express from "express";
import "dotenv/config";

import restaurantRoutes from "./routes/restaurantRoutes.js";

const app = express();

app.use("/api/v1/restaurants", restaurantRoutes);

const port = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`Server is listening on port ${port}`);
});
