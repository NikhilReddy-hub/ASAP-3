const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define a Mongoose Schema & Model
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Item = mongoose.model("Item", ItemSchema);

// 🟢 Create (POST) - Add a new item
router.post("/items", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// 🔵 Read (GET) - Fetch all items
router.get("/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 🟡 Update (PUT) - Update an item by ID
router.put("/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ success: false, message: "Item not found" });
    res.status(200).json({ success: true, data: updatedItem });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// 🔴 Delete (DELETE) - Remove an item by ID
router.delete("/items/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ success: false, message: "Item not found" });
    res.status(200).json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
