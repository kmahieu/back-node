import express from 'express';
import { getUsers, getUser, createUsers, deleteUser, updateUser,} from "../controllers/usersControllers.js"

const router = express.Router();

router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/user', createUsers);
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)

export default router;