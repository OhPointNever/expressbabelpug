import express from 'express'
import * as routes from './routes'
const app = express()
app.disable('x-powered-by')
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'pug')
app.use('/', routes.rest)
app.use(express.static(__dirname + '/public'))
require('./http')(app)
module.exports = app
