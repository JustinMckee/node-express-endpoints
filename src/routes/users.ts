import { Router } from 'express';
import {
	getAllUsers,
	getUserById,
	deleteUser,
	updateUser,
	createUser,
} from '../controllers/userController.js';

const router = Router();
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

// Export the router to be used in the main server file
export const userRoutes = router;
