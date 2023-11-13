import express from 'express';
const router = express.Router();
import { authUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile } from '../controller/userController.js';
import { update } from 'tar';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put (updateUserProfile);

router.put('/profile', updateUserProfile);


export default router;
