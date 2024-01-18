const Login = (req, res) => {
  res.status(200).json({ message: "Login Called" });
};

const Register = (req, res) => {
  res.status(200).json({ message: "Register Called" });
};

module.exports = { Login, Register };
