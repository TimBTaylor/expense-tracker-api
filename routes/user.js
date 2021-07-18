const express = require("express");
const router = express.Router();

const User = require("../models/user");

//create user
router.post("/user", async (req, res) => {
  const user = new User({
    username: req.body.name,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "went wrong here" });
  }
});

//get all
router.get("/allusers", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all transactions
router.get("/transactions/:id"),
  getUser,
  (req, res) => {
    res.send(user.transacton);
  };

//add transaction
router.post("/addtransaction/:id", getUser, async (req, res) => {
  if (req.body.transaction != null) {
    res.user.transaction.push(req.body.transaction);
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//delete transaction
router.delete("/deletetransaction/:id", getUser, async (req, res) => {
  if (req.body.transaction != null) {
    res.user.transaction.remove(req.body.transaction);
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//update user info
router.post("/:id", getUser, async (req, res) => {
  if (req.body.username != null) {
    res.user.username = req.body.username;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//get user info
router.get("/:id", getUser, (req, res) => {
  res.send(res.user);
});

//delete user
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);

    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

module.exports = router;
