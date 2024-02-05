import express from 'express';

const routes = express.Router();

import userController from './controllers/userController';

/** USERS **/
routes.get('/users', userController.get);
routes.get('/users/:id', userController.getById);
routes.post('/users', userController.post);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

module.exports = routes;