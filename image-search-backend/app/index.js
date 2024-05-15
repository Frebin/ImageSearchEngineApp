const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
// const mongoose = require("mongoose");
const routes = require("./routes/api.router");

const app = express();
app.use(cors());
app.use(body_parser.json({ limit: "50mb" }));

// connect_mongoose = async () => {
//   try {
//     await mongoose.connect(process.env.DB_CONNECTION_STRING, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 100000,
//     });
//     console.log("mongo db connected successfully");
//   } catch (error) {
//     console.log("mongo db connection failed",error);
//   }
// };
app.use("/api/v1", routes);
// connect_mongoose();

module.exports = app;
