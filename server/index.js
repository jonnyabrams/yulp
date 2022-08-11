const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;

app.listen(8000, () => {
  console.log(`Server is listening on port ${port}`);
});
