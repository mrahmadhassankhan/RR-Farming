const mongoose = require("mongoose");

// Connection string to your MongoDB database
const dbURI = "mongodb+srv://admin:adminPassword@farming.kjjo4gd.mongodb.net/";

// Connect to MongoDB
mongoose.connect(dbURI);

// Get the default connection
const db = mongoose.connection;

// Event listeners for the connection
db.on("connected", () => {
  console.log(`Mongoose connected`);
});

db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = db;
