const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./MiddleWare/errorHAndler')
const connectDB = require('./config/db')
const port = 7878

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', require('./userroutes'))

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at port ${port}`))

