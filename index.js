const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to parse JSON body
app.use(express.json());

// Simple in-memory "DB"
let users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
];

// Root
app.get("/", (req, res) => {
	res.json({ status: "ok", message: "Basic Express server" });
});

// List users
app.get("/users", (req, res) => {
	res.json(users);
});

// Get single user
app.get("/users/:id", (req, res) => {
	const id = Number(req.params.id);
	const user = users.find((u) => u.id === id);
	if (!user) return res.status(404).json({ error: "User not found" });
	res.json(user);
});

// Create user
app.post("/users", (req, res) => {
	const { name } = req.body;
	if (!name) return res.status(400).json({ error: "Name is required" });
	const id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
	const newUser = { id, name };
	users.push(newUser);
	res.status(201).json(newUser);
});

// Update user
app.put("/users/:id", (req, res) => {
	const id = Number(req.params.id);
	const { name } = req.body;
	const idx = users.findIndex((u) => u.id === id);
	if (idx === -1) return res.status(404).json({ error: "User not found" });
	if (!name) return res.status(400).json({ error: "Name is required" });
	users[idx].name = name;
	res.json(users[idx]);
});

// Delete user
app.delete("/users/:id", (req, res) => {
	const id = Number(req.params.id);
	const idx = users.findIndex((u) => u.id === id);
	if (idx === -1) return res.status(404).json({ error: "User not found" });
	const removed = users.splice(idx, 1)[0];
	res.json(removed);
});

// 404 handler
app.use((req, res) => {
	res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
