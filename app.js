// external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const {notFoundHandler,errorHandler} = require("./meddilewares/common/errorHandeler");
const loginRouter = require('./router/loginRouter');
const usersRouter = require('./router/usersRouter');
const inboxRouter = require('./router/inboxRouter');

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;
// Databse connection
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Database Connected Successfull!!");
  })
  .catch((err) => {
    console.log(err);
  });

//   request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// cookie perser
app.use(cookieParser(process.env.COOKIE_SECRET));

// route setup
app.use('/',loginRouter);
app.use('/users',usersRouter);
app.use('/inbox',inboxRouter);

// notfound error handeling
app.use(notFoundHandler);
// error handeling
app.use(errorHandler)
// server running
app.listen(port, () => {
  console.log("server is running port:", port);
});
