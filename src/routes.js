import express from 'express';

const routes = express.Router();

import userController from './controllers/userController';

/** USERS **/
routes.get('/users', userController.get);
routes.get('/users/:id', userController.getById);
routes.post('/users', userController.post);

module.exports = routes;