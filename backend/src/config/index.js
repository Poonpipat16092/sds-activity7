/* @flow */
import dotenv from 'dotenv'

dotenv.config()

export const databaseConfig = {
  endpoint: process.env.DB_ENDPOINT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  authDatabase: process.env.DB_AUTH_SOURCE,
  ssl: process.env.DB_SSL === 'true',
  replicaSet: process.env.DB_REPLICA_SET,
}

export const {
  APP_ENV,
  NODE_PORT,
  URL_PREFIX,
  JWT_PRIVATE_KEY,
  JWT_PUBLIC_KEY,
} = process.env
