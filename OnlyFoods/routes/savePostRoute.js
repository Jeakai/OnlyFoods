import express from 'express';
import { getPosts, savePost } from '../controllers/savePostController.js';

const router = express.Router();

const isAuthenticated = (req, res, next) => {
    if (req.session.user_id) {
      next();
    } else {
      res.redirect('/');
    }
  };

router.post('/post/:id/save', isAuthenticated, savePost);
router.get('/getPosts', getPosts);

export default router;
