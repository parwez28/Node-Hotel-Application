const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem.js');

// GET: Menu list
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    console.log("Menu list fetched");
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Add menu item
router.post('/', async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    const savedItem = await menuItem.save();
    console.log("Menu item added");
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Update menu item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (updatedItem) {
      console.log("Menu item updated");
      res.status(200).json(updatedItem);
    } else {
      console.log("Menu item not found");
      res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Remove menu item
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (deletedItem) {
      console.log("Menu item deleted");
      res.status(200).json(deletedItem);
    } else {
      console.log("Menu item not found");
      res.status(404).json({ message: 'Menu item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
