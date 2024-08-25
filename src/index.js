const dotenv = require("dotenv");
const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const cors = require("cors");
const port = process.env.PORT || 3000;

// options for swagger ui docs
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Get Youtube Subcribers",
      version: "1.0.0",
      description: "A Minimal Express API To Get Youtube Subscribers",
    },
    servers: [
      {
        url: "https://module-4-backend-development-capstone.onrender.com",
      },
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./src/app.js"],
};

const specs = swaggerJsDoc(options);
app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

// to configure the env variable path
dotenv.config({ path: "./.env" });

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enabling cors to get over CORS Restriction
app.use(cors());

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`));