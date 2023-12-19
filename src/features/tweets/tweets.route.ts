import express from 'express';
import * as tweetsController from './tweets.controller';

const router = express.Router();

router.get('/', tweetsController.getFeed);

router.get('/:id', tweetsController.get);

router.post('/', tweetsController.create);

router.put('/:id', tweetsController.update);

router.delete('/:id', tweetsController.remove);


export default router;