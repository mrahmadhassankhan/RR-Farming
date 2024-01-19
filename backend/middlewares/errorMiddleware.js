//When the route is not Found
const notFound = (req, res, next) => {
  //next is a middleware function
  const error = new Error(`Not Found - ${req.originalurl}`);
  res.status(404);
  // next is used to pass control to the next middleware in the stack.
  next(error);
};

// For general Errors it will check which error is thrown by the server and then it will convert it into structured form
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
