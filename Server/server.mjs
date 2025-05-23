import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db_config/Connection.js";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

/* connection Db */
connectDB();

/*dotenv  */
import dotenv from "dotenv";
dotenv.config();

/* Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/* Routes */

/* connections to port*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
