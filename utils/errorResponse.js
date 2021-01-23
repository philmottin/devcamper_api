class ErrorResponse extends Error {
  constructor(message, statusCode) {
    // call the class that statusCode are extending, in this case Error class
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
