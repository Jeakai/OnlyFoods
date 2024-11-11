import express from 'express';
import { flagPost } from '../controllers/flagPostController.js';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
    if (req.session.user_id) {
      next();
    } else {
      res.redirect('/');
    }
  };

router.post('/flagPost', isAuthenticated, flagPost);

export default router;