const express = require("express");
const router = express.Router();

const users = require("./users");

router.use("/users", users);

// health
router.get("/health", (req, res) =>
	res.json({ ok: true, time: new Date().toISOString() })
);

module.exports = router;
