// Basic Express app setup
const express = require("express");
const app = new express();
const router = require("./src/routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Security middleware
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");


// Security middleware implementation
app.use(cors());
app.use(rateLimit());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body parser middleware implementation
app.use(bodyParser.json());

// Request Rate Limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 3000,
});
app.use(limiter);

// MongoDB Database connection
// const URI= "mongodb+srv://admin:tushar@cluster0.bstsr.mongodb.net/todo";
const URI= "mongodb://localhost:27017/todo-app";
const options ={autoIndex: true};
mongoose.connect(URI, options, (err) => {
	console.log("Connected to MongoDB");
	console.log(err);
});

// Routes
app.use("/api/v1", router);

// Undefined routes
app.use('*', (req, res) => {
	res.status(404).json({status: 'fail', data: '404 not found'});
});

module.exports = app;