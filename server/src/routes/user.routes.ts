import express from 'express'
import { createUser,loginUser } from '../controllers/user.controllers';

const routes = express.Router();

routes.post('/user/create', createUser);
routes.post('/user/login', loginUser);

export default routes;