import ResponseError from './responseError'

const handlePageNotFound = () => (req) => {
  throw new ResponseError({
    httpStatus: 404,
    message: 'Not found url + method',
    payload: {
      url: req.originalUrl,
    },
  })
}

export default handlePageNotFound
