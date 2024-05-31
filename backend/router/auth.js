import {Router} from 'express';
import { Login, Register } from '../controllers/auth.js';

const routerAuth = Router();

routerAuth.post('/register', Register)
routerAuth.post('/login', Login)

export default routerAuth