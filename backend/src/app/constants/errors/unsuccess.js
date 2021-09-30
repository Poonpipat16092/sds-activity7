import ResponseError from './responseError'

export const NOT_FOUND_DATA = new ResponseError({
  httpStatus: '404',
  message: 'Not Found',
})

export const ERROR_DELETED = new ResponseError({
  httpStatus: '500',
  message: 'error occurred in delete',
})

export const ERROR_UPDATED = new ResponseError({
  httpStatus: '500',
  message: 'error occurred in update',
})

export const ERROR_CREATION = new ResponseError({
  httpStatus: '500',
  message: 'error occurred in create',
})

export const ERROR_UNAUTHORIZED = new ResponseError({
  httpStatus: '401',
  message: 'Unauthorized',
})
