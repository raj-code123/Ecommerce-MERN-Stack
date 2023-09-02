const connectDB = require('./config/db.js');
const { app } = require(".");
const PORT = 5454;

require('dotenv').config(); // Load the .env file

const url = process.env.URL; // Access the value of URL

app.listen(PORT, async () => {
    try {
      await connectDB(url);
      console.log("Ecommerce API listening on PORT:", PORT);
    } catch (error) {
      console.error("Failed to connect to the database:", error);
    }
});
  