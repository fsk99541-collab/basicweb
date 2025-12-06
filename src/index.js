// require('dotenv').config();
// const app = require('./app');


// const PORT = process.env.PORT || 3000;


// app.listen(PORT, () => {
// console.log(`Server listening on port ${PORT} — env=${process.env.NODE_ENV || 'development'}`);
// });

const express = require("express");
const app = express();
const PORT = 4000;

app.get("/home", (req, res) => {
	res.status(200).json("Welcome, your app is working well");
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app;