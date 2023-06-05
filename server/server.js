require('dotenv').config(); //Loading our environment variables to be useable in our code
const express = require('express'); //Importing express so we can use it in our code
const cors = require('cors'); //Importing cors to protect our routes

//Creating an instance of express so we can enable it in our application
const app = express();

// Middleware
app.use(cors()); //Enabling cors on all our routes we use in express, for security reasons
app.use(express.json()); // Enabling the data we receive from our routes to be JSON



// Listen port to confirm we are connected to localhost
app.listen(process.env.PORT, () => {
    console.log(`⌛️ listening on Port:${process.env.PORT} ⏳`)
});