import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db_config/Connection.js";

connectDB();
/*dotenv  */
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* Routes */

/* connections to port*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
