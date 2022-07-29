const express = require('express')
const cors = require('cors')
const port = 7878

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user', require('./userroutes'))

app.listen(port, () => console.log(`Server is running at port ${port}`))

