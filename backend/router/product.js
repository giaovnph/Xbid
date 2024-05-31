import { Router } from 'express';
import { AddCategory, AddProduct, EditProduct, GetAllProduct, GetOneProduct } from '../controllers/product.js'

const routerProduct = Router();

routerProduct.get('/', GetAllProduct)
routerProduct.get('/:id', GetOneProduct)
routerProduct.post('/', AddProduct)
routerProduct.put('/:id', EditProduct)


routerProduct.post('/category', AddCategory)

export default routerProduct