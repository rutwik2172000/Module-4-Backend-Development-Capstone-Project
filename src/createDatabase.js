const dotenv = require("dotenv");
const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

// Verify if DATABASE_URL is loaded
const DATABASE_URL = process.env.DATABASE_URL;
console.log("Database URL:", DATABASE_URL);

// Set Mongoose strictQuery option to handle deprecation warning
mongoose.set("strictQuery", true);

// Connect to MongoDB
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database connected..."));

const refreshAll = async () => {
  try {
    await subscriberModel.deleteMany({});
    await subscriberModel.insertMany(data);
    console.log("Database refreshed with new data.");
  } catch (err) {
    console.error("Error during database refresh:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Database connection closed.");
  }
};

refreshAll();