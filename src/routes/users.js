const express = require("express");
const router = express.Router();

const Users = require("../controllers/usersController");
const { validateBody } = require("../middlewares/validate");
const { createUserSchema } = require("../validators/userValidator");

router.get("/", Users.getAll);
router.get("/:id", Users.getById);
router.post("/", validateBody(createUserSchema), Users.create);
router.put("/:id", validateBody(createUserSchema), Users.update);
router.delete("/:id", Users.remove);

module.exports = router;
