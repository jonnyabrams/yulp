import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";

import restaurantRoutes from "./routes/restaurantRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.use("/api/v1/restaurants", restaurantRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

const port = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`Server is listening on port ${port}`);
});
