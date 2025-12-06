// Simple in-memory user store for demo purposes.
const crypto = require("crypto"); // built-in, works everywhere

const store = new Map();

// helper
function generateId() {
	return crypto.randomUUID(); // no ESM issues!
}

exports.getAll = async () => Array.from(store.values());

exports.getById = async (id) => store.get(id) || null;

exports.create = async (data) => {
	const id = generateId();
	const user = { id, ...data, createdAt: new Date().toISOString() };
	store.set(id, user);
	return user;
};

exports.update = async (id, data) => {
	if (!store.has(id)) return null;

	const existing = store.get(id);
	const updated = {
		...existing,
		...data,
		updatedAt: new Date().toISOString(),
	};

	store.set(id, updated);
	return updated;
};

exports.remove = async (id) => store.delete(id);
