const Joi = require("joi");

exports.createUserSchema = Joi.object({
	name: Joi.string().min(1).required(),
	email: Joi.string().email().required(),
	age: Joi.number().integer().min(0).optional(),
});
