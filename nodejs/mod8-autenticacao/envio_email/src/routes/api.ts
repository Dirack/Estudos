import { Router } from 'express';
import {Auth} from '../middlewares/auth';

import * as ApiController from '../controllers/apiController';
import * as EmailController from '../controllers/emailController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.private, ApiController.list);
router.post('/contato',EmailController.contato);

export default router;
