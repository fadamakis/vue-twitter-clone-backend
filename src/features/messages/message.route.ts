import express from 'express';
import messageController from './message.controller';

const router = express.Router();

router.get('/:id', messageController.getOne);

router.post('/', messageController.createOne);

router.put('/:id', messageController.updateOne);

router.delete('/:id', messageController.removeOne);

export default router;