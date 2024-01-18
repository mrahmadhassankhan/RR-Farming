const mongoose = require("mongoose");

// Connection string to your MongoDB database
const dbURI = "mongodb://localhost:27017/your_database_name";

// Connect to MongoDB
mongoose.connect(dbURI, options);

// Get the default connection
const db = mongoose.connection;

// Event listeners for the connection
db.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = db;
