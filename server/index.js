import express from "express";
import morgan from "morgan";
import "dotenv/config";

import restaurantRoutes from "./routes/restaurantRoutes.js";

const app = express();

// middleware
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/restaurants", restaurantRoutes);

const port = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`Server is listening on port ${port}`);
});
