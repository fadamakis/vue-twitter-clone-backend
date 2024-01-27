import express from 'express';
import notificationsController from './notifications.controller';

const router = express.Router();

router.get('/', notificationsController.getAll);

router.post('/', notificationsController.createOne);


export default router;