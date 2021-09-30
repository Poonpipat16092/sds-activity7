import { validationResult } from 'express-validator'
import ResponseError from '../constants/errors/responseError'

export const validateRequests = (requestValidator) => async (req, res) => {
  await Promise.all(requestValidator.map((validate) => validate(req, res, () => { })))

  return validationResult(req).errors
}

const executeValidator = (requestValidator) => async (req, res, next) => {
  const errors = await validateRequests(requestValidator)(req, res)
  if (!errors.length) {
    return next()
  }

  throw new ResponseError({
    httpStatus: '422',
    payload: errors,
  })
}

export default executeValidator
