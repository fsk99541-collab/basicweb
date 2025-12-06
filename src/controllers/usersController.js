const usersService = require("../services/usersService");

exports.getAll = async (req, res) => {
	const all = await usersService.getAll();
	res.json(all);
};

exports.getById = async (req, res) => {
	const user = await usersService.getById(req.params.id);
	if (!user) return res.status(404).json({ message: "User not found" });
	res.json(user);
};

exports.create = async (req, res) => {
	const created = await usersService.create(req.body);
	res.status(201).json(created);
};

exports.update = async (req, res) => {
	const updated = await usersService.update(req.params.id, req.body);
	if (!updated) return res.status(404).json({ message: "User not found" });
	res.json(updated);
};

exports.remove = async (req, res) => {
	const removed = await usersService.remove(req.params.id);
	if (!removed) return res.status(404).json({ message: "User not found" });
	res.status(204).send();
};
