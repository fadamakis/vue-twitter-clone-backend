import express from 'express';
import * as messageController from './message.controller';

const router = express.Router();

router.get('/:id', messageController.get);

router.post('/', messageController.create);

router.put('/:id', messageController.update);

router.delete('/:id', messageController.remove);

export default router;