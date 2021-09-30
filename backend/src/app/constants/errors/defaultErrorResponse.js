import ResponseError from './responseError'

const defaultErrorResponse = new ResponseError({
  httpStatus: 500,
})

const expressErrorResponse = ({
  defaultError = defaultErrorResponse,
  enableLog = true,
}) => (error, req, res, next) => {
  if (!error) {
    next()
  }

  const {
    httpStatus,
    message,
    payload,
  } = error instanceof ResponseError ? error : defaultError
  const errorResponse = {
    error: {
      httpStatus,
      message,
      payload,
      errorStack: error.stack,
    },
  }

  if (enableLog && httpStatus >= 400) {
    try {
      console.error({
        error: {
          ...errorResponse.error,
          payload: errorResponse.error.payload ? JSON.stringify(errorResponse.error.payload, null, 2) : undefined,
        },
      })
    } catch (e) {
      console.error(error)
    }
  }

  if (httpStatus < 500 || process.env.APP_ENV === 'production') {
    delete errorResponse.error.errorStack
  }

  return res.status(httpStatus).json(errorResponse)
}

export default expressErrorResponse
