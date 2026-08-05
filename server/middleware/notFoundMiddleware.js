// Handles requests that do not match any defined route.
const ApiError = require('../utils/ApiError');

const notFoundMiddleware = (req, res, next) => {
  next(new ApiError(`Route not found: ${req.originalUrl}`, 404));
};

module.exports = notFoundMiddleware;
