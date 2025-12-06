// Simple in-memory user store for demo purposes.
const store = new Map();

// helper: ESM dynamic import for uuid
async function getUuid() {
	const { v4: uuid } = await import("uuid");
	return uuid;
}

exports.getAll = async () => Array.from(store.values());

exports.getById = async (id) => store.get(id) || null;

exports.create = async (data) => {
	const uuid = await getUuid();

	const id = uuid();
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
