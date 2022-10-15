import { Router } from "express";
import userSchema from "../models/user.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

// Get user by id
router.get("/users/id/:id", async (req, res) => {
    const { id } = req.params;
    const user = await userSchema.findById(id);
    res.send(user);
});

// Get user by username
router.get("/users/:user", async (req, res) => {
    const { user } = req.params;
    res.json(await userSchema.find({ user }));
});

// Get all users
router.get("/users", async (req, res) => {
    await userSchema
        .find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Create user
router.post("/users", async (req, res) => {
    const user = new userSchema(req.body);
    await user.save()
        .then((user) => res.send(user))
        .catch((err) => res.status(500).send(err));
});

// Update user
router.put("/users", async (req, res) => {
    const { id } = req.query;
    const { user, password } = req.body;
    await userSchema
        .findByIdAndUpdate(id, { user, password })
        .then(() => res.send("User updated"))
        .catch((err) => res.status(500).send(err));
});

// Delete user
router.delete("/users", async (req, res) => {
    const { id } = req.query;
    await userSchema
        .findByIdAndDelete(id)
        .then(() => res.send("User deleted"))
        .catch((err) => res.status(500).send(err));
});

export { router };