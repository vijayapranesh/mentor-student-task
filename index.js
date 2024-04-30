

import express from "express";
import AppRouter from "./routers/router.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json());
app.use("/", AppRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Server! ");
});

mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Database connection established'))
  .catch(err => console.log(err));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



















// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//       console.log("Database connection established...");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });