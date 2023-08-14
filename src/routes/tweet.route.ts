import express from 'express';
import * as tweetController from '../controllers/tweet.controller';

const router = express.Router();

router.get('/getFeed', tweetController.getFeed);

router.get('/:id', tweetController.get);

router.post('/', tweetController.create);

router.put('/:id', tweetController.update);

router.delete('/:id', tweetController.remove);


export default router;