import { Router } from 'express';
import { AddCategory} from '../controllers/product.js'

const routerCategory = Router();



routerCategory.post('/category', AddCategory)

export default routerCategory