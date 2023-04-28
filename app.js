require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connect')
const express = require('express');
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");
const authenticationMiddleware = require('./middleware/authentication')
const app = express();

// Middlewares

app.use(express.json());

//Main route 

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticationMiddleware, jobsRouter)

// error handler

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;
const connString = process.env.MONGO_DB_URI

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );

    await connectDB(connString)
    console.log("Database Connected...")
  } catch (error) {
    console.log(error);
  }
};

start();
