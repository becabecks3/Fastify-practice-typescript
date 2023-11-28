import { getProducts, getSingleProduct, addProduct, updatedProduct, deleteProduct } from '../controllers/products.controller.js';

const productRoutes = async (fastify, options) => {

    fastify.get('/products', getProducts);

    fastify.get('/products/:id', getSingleProduct);

    fastify.post('/products', addProduct);

    fastify.put('/products/:id', updatedProduct);

    fastify.delete('/products/:id', deleteProduct);

}  

export default productRoutes;
