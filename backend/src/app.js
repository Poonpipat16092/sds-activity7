import express from 'express'
import configExpress from './config/express'
import routes from './app/routes'
import { URL_PREFIX, APP_ENV } from './config'
// import handlePageNotFound from './app/constants/errors/handlePageNotFound'
import expressErrorResponse from './app/constants/errors/defaultErrorResponse'

const app = express()

configExpress(app)

app.get('/healthz', (req, res) => res.status(200).json({ status: 'ok' }))

app.use(`${URL_PREFIX}`, routes)

// app.use(handlePageNotFound())

app.use(expressErrorResponse({ enableLog: (APP_ENV !== 'test') }))

export default app
