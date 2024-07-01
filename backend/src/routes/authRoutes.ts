import { Router } from 'express';
import {signup,login,logout} from '../controllers/authController'; // Importing the authController

const router = Router();

// POST /api/auth/signup
router.post('/signup', signup);

router.post('/logout', login);
// POST /api/auth/login
router.post('/login', login);

export default router;
