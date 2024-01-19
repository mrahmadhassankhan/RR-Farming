const User = require("../Models/userModel"); // Imported the User Model
const asynchandler = require("express-async-handler"); // For Error Handling

const Register = asynchandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists in Database
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  //Crete New User
  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    //201 is for successful
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }

  // res.json({
  //   username,
  //   email,
  // });
});

const Login = asynchandler(async (req, res) => {
  res.status(200).json({ message: "Login Called" });
});

module.exports = { Login, Register };
