const express = require("express");
const db = require("../backend/Database/DatabaseConnection"); // Connection Handling MongoDB
const userrouter = require("./Routers/userRouter");
const app = express();
const cors = require("cors");
const {
  errorHandler,
  notFound,
} = require("../backend/middlewares/errorMiddleware");
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());

// Define routes
app.use("/api", userrouter);

//Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
