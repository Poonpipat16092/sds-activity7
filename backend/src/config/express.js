import bodyParser from 'body-parser'
// import methodOverride from 'method-override'
import cors from 'cors'
import { APP_ENV } from './index'

export default (app) => {
  app.use('/favicon.ico', (req, res) => res.sendStatus(204))
  app.use(cors())
  app.use(bodyParser.json({ limit: '5mb' }))
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
  // app.use(methodOverride((req) => {
  //   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
  //     const method = req.body._method
  //     delete req.body._method
  //     return method
  //   }
  // }))

  if (APP_ENV === 'development') {
    app.locals.pretty = true
  }
}
