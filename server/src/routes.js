import { Router } from 'express';
import LanguagesController from './app/controllers/LanguagesController';

const routes = new Router();

routes.get('/languages', LanguagesController.index);
routes.get('/languages', LanguagesController.store);

export default routes;
