const express = require("express");
const userrouter = require("../backend/Routers/userRouter");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use("/api", userrouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
