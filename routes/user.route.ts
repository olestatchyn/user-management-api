import { Router } from 'express';
import { validate } from '../middlewares/validation.middleware';
import * as userController from '../controllers/user.controller';
import { userSchema, userUpdateSchema } from '../models/user.model';

const userRoutes = Router();

userRoutes.get('/', userController.getAllUsers);
userRoutes.get('/:id', userController.getUserById);
userRoutes.post('/', validate(userSchema), userController.createUser);
userRoutes.patch('/:id', validate(userUpdateSchema), userController.updateUser);
userRoutes.delete('/:id', userController.deleteUser);

export default userRoutes;