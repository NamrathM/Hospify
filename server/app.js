const express = require('express')
require('./src/config/db')
const appointmentRouter = require('./src/routes/appointment')


const app = express()
app.use (express.json())




app.use(appointmentRouter)

app.listen(7000, () => {
    console.log('Server is up on port 7000')})

