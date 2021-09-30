import blog from './schemas/blog'

const create = (data, options) => blog.create(data, options)

// const find = (query, fields = {}, options = {}) => banner.find(query, fields, options).lean()

const findOne = (query, fields = {}, options = {}) => blog.findOne(query, fields, options).lean()

const findOneAndUpdate = (query, data, options = {}) => blog.update(query, data, options).lean()

const deleteOne = (query) => blog.deleteOne(query)

const count = (query, options) => blog.countDocuments(query, options)

const findAggregate = (query, options) => {
  console.log(options)
  const pipeline = []
  if (options.skip) {
    pipeline.push({ $skip: options.skip })
  }
  if (options.limit) {
    pipeline.push({ $limit: options.limit })
  }
  console.log(pipeline)
  return blog.aggregate(pipeline)
}

export default {
  create,
  count,
  findOne,
  findAggregate,
  findOneAndUpdate,
  deleteOne,
}
