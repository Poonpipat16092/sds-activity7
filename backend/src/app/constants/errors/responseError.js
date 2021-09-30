require('express-async-errors')
class ResponseError extends Error {
  constructor({
    httpStatus,
    message,
    payload,
  }) {
    super(message)
    this.name = 'ResponseError'
    this.message = message
    this.httpStatus = httpStatus || 500
    this.payload = payload
  }
}

export default ResponseError
