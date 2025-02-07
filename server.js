const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use("/api", routes); // Use the defined routes

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/asap_project", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connect("mongodb://localhost:27017/asap_project")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


