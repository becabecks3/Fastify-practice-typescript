import { getProducts, getSingleProduct, addProduct, updatedProduct, deleteProduct } from '../controllers/products.controller';
import { addProductSchema, deleteProductSchema, getOneProductSchema, getProductsSchema, updateProductSchema } from './product.schemas';
import { type FastifyInstance} from 'fastify';

const productRoutes = async (fastify: FastifyInstance): Promise<void> => {

    fastify.get('/products', { schema: getProductsSchema }, getProducts);

    fastify.get('/products/:id', { schema: getOneProductSchema }, getSingleProduct);

    fastify.post('/products', { schema: addProductSchema }, addProduct);

    fastify.put('/products/:id', { schema: updateProductSchema }, updatedProduct);

    fastify.delete('/products/:id', { schema: deleteProductSchema },  deleteProduct);
}  


export default productRoutes;
 