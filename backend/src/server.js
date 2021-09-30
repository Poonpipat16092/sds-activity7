import mongoose from 'mongoose'
import app from './app'

import {
  APP_ENV,
  NODE_PORT,
  databaseConfig,
} from './config'

const database = `${databaseConfig.endpoint}`
const option = {
  user: databaseConfig.username,
  pass: databaseConfig.password,
  dbName: databaseConfig.database,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  replicaSet: databaseConfig.replicaSet,
}

mongoose.connect(database, option, (connectionError) => {
  if (connectionError) {
    console.warn('Mongoose could not connect.')
    console.error(connectionError)
  }
})

if (APP_ENV !== 'test') {
  console.info('Connecting MongoDB...')
  mongoose.connection.on('connected', async () => {
    console.info('Mongoose connection has been connected.')

    app.listen(NODE_PORT)
    console.info(`Server is running at port: ${NODE_PORT}`)
  })
}
