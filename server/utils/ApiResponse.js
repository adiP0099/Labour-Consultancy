// Shared response helpers for uniform success and error payloads.
class ApiResponse {
  static success(res, statusCode = 200, data = null, message = 'Success') {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static error(res, statusCode = 500, payload = {}) {
    return res.status(statusCode).json({
      success: false,
      ...payload
    });
  }
}

module.exports = { ApiResponse };
