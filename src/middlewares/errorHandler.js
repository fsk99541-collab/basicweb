function notFoundHandler(req, res, next) {
	res.status(404).json({ message: "Not Found" });
}

function errorHandler(err, req, res, next) {
	console.error(err);
	const status = err.status || 500;
	const message =
		process.env.NODE_ENV === "production"
			? "Internal Server Error"
			: err.message;
	res.status(status).json({ message });
}

module.exports = { notFoundHandler, errorHandler };
