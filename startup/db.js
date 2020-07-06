const dotenv = require("dotenv");
const mongoose = require("mongoose");

/*Replace the MONGO_URI environment variable with the actual URL 
of your MongoDB in a .env file
*/
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB...");
  })
  .catch((err) => {
    console.log("Could not connect to mongoDB...", err);
  });
