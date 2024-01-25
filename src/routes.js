import express from 'express';

const routes = express.Router();

import userController from './controllers/userController';

routes.get('/users', userController.get);

module.exports = routes;