import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  isMarried: Joi.boolean().required()
});

const userUpdateSchema = Joi.object({
  name: Joi.string(),
  age: Joi.number().integer(),
  isMarried: Joi.boolean()
});

export { userSchema, userUpdateSchema }