const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
// Create a new Mongoose model for your data
const DataModel = mongoose.model("Data", {
  name: String,
  email: String,
  phone: String,
  school: String,
  message: String,
});
app.get("/api/data/get", (req, res) => {
  DataModel.find({})
    .then((data) => {
      res.json(data); // Respond with the retrieved data as a JSON array
    })
    .catch((err) => {
      console.error("Error retrieving data from MongoDB: ", err);
      res
        .status(500)
        .json({
          error: "An error occurred while retrieving data from MongoDB",
        });
    });
});

app.post("/api/data/post", (req, res) => {
  const { name, email, phone, school, message } = req.body;
  

  // Create a new document and save it to the database
  const newData = new DataModel({ name, email, phone, school, message });

  newData
    .save()
    .then(() => {
      res.status(200).json({ message: "Data saved to MongoDB" });
    })
    .catch((error) => {
      console.error("Error saving data to MongoDB: ", error);
      res
        .status(500)
        .json({ error: "An error occurred while saving data to MongoDB" });
    });
});
module.exports = app;
