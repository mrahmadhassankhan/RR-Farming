const express = require("express");
const db = require("../backend/Database/DatabaseConnection");
const userrouter = require("./Routers/userRouter");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
// Define routes
app.use("/api", userrouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
