import Product from '../models/product.models'
import { type RouteHandler } from 'fastify';
import { type Params, type Body, type Reply, type Products } from '../routes/product.schemas';

const getProducts : RouteHandler<{Reply: Products}>  = async (req, reply): Promise<void>  => {
    const products = await Product.find()
    console.log(products)
    reply.code(200).send({products});
}
const getSingleProduct : RouteHandler<{Params: Params, Reply: Reply}> = async (req, reply): Promise<void> => {
    const product = await Product.findById(req.params.id)
    const singleProductObject = product?.toObject()
    reply.code(200).send(singleProductObject);
}

const addProduct : RouteHandler<{Body: Body, Reply: Reply}> = async (req, reply): Promise<void> => {
    const newProduct = new Product(req.body);
    await newProduct.save()
    const newProductObject = newProduct?.toObject()
    reply.code(201).send(newProductObject);
}

const updatedProduct : RouteHandler<{Params: Params, Body: Body}> = async (req, reply): Promise<void>  => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true} // Returns updated product
    )
   reply.code(200).send(product);
}

const deleteProduct  : RouteHandler<{Params: Params}> = async (req, reply): Promise<void>  => {
    const productId = await Product.findByIdAndDelete(req.params.id)
    reply.code(204).send(`Product ${productId} deleted`);
}



export { getProducts, getSingleProduct, addProduct, updatedProduct, deleteProduct }