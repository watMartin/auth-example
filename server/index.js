import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import api from './api'
// import jwt from 'jsonwebtoken'
// import User from '/models/user'

const app = express()
if (process.env.SECRET === undefined) process.env.SECRET = 'Q8r83KHW,"@YJvJJml:I3D{guonu`t'

// Parse post routes as json
app.use(bodyParser.json())

// Use cors
app.use(cors())

// Connect to mongo db
mongoose.connect('mongodb://localhost/auth')

// Use cookie-parser
app.use(cookieParser)

// Import API routes
app.use('/api', api)

app.get('/', (req, res) => {
  console.log(req)
  res.send('congrats!')
})

// Listen on the server
app.listen(4000, () => {
  console.log('Server running on port 4000')
})
