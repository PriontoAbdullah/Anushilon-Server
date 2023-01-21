const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

// config dotenv
require('dotenv').config({
  path: './config/config.env',
});

// create app
const app = express();

// connect to database
connectDB();

// body parser
app.use(bodyParser.json());

// load routes
const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');

// development environment middleware
if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan('dev'));
} else {
  app.use(cors());
}

// use routes
app.use('/api', authRouter);
app.use('/api', userRouter);

// page not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    msg: 'Page not founded',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
