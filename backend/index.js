require('dotenv').config();
var cors = require('cors');
const express = require('express');
const app = express();

//middleware
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

//db
const connectDB = require('./db/connect')


//routes
const eventRoute = require('./routes/event')
const userRoute = require('./routes/user')

const port = process.env.PORT || 5000
app.use(express.json());
app.use(cors())
app.use('/api', eventRoute)
app.use('/users', userRoute)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const start = async () => {
    try{
       await connectDB(process.env.MONGODB_URI)
      app.listen(port , console.log(`Server started at port ${port}`))
    } catch(err) {
        console.log(err)
    }
}

start();