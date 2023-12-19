import express from 'express';
import * as usersController from './users.controller';

const router = express.Router();

router.get('/:id', usersController.get);

router.post('/', usersController.create);

router.put('/:id', usersController.update);

router.delete('/:id', usersController.remove);

export default router;