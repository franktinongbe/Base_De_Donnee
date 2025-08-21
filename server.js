const express = require("express");
const connectDB = require("./config/baseDeDonne");
const cors = require("cors");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
