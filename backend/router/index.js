import routerAuth from "./auth.js";
import routerCategory from "./category.js";
import routerProduct from "./product.js";

export default function rr(app) {
    app.use('/api/products', routerProduct)
    app.use('/api/auth', routerAuth)
    app.use('/api/category', routerCategory)
}