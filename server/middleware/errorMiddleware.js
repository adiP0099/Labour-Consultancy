// Centralized error handling for all routes and async operations.
const { ApiResponse } = require('../utils/ApiResponse');

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  const payload = {
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  };

  if (err.errors) {
    payload.errors = err.errors;
  }

  return ApiResponse.error(res, statusCode, payload);
};

module.exports = errorMiddleware;
