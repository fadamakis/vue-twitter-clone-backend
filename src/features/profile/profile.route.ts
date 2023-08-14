import express from 'express';
import * as profileController from './profile.controller';

const router = express.Router();

router.get('/:id', profileController.get);

router.post('/', profileController.create);

router.put('/:id', profileController.update);

router.delete('/:id', profileController.remove);

export default router;