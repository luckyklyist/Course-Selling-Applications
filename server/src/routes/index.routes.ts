import express from 'express'

const Routes = express.Router();
import user from './user.routes'
import course from './course.routes';

Routes.use('/', user);
Routes.use('/', course);

export default Routes;