const Register = async (req, res) => {
  const { username, email, password } = req.body;
  res.json({
    username,
    email,
  });
};

const Login = async (req, res) => {
  res.status(200).json({ message: "Login Called" });
};

module.exports = { Login, Register };
