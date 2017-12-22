const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const User = require('./user/model/user')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/axolotl')

mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
mongoose.connection.on('connected', () => {
    console.log('successfully connected to mongodb!')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes for our API
var router = express.Router()

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening')
    next()
})

router.get('/', (req, res) => {
    res.json({ message: "Hello World!" })
})

const routes = require('./user/routes/userRoutes')
routes(router)

app.use('/api', router)

app.listen(port)
console.log('API started on port ' + port)