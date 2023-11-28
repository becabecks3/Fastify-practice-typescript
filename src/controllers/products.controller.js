import Product from '../models/product.models.js'

const getProducts = async (req, reply) => {
    const products = await Product.find()
    reply.code(200).send(products);
}
const getSingleProduct = async (req, reply) => {
    const product = await Product.findById(req.params.id)
    reply.code(200).send(product);
}

const addProduct = async (req, reply) => {
    const newProduct = new Product(req.body);
    await newProduct.save()
    reply.code(201).send(newProduct);
}

const updatedProduct = async (req, reply) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true} // Returns updated product
    )
   reply.code(200).send(product);
}

const deleteProduct = async (req, reply) => {
    const productId = await Product.findByIdAndDelete(req.params.id)
    reply.code(204).send(`Product ${productId} deleted`);
}



export { getProducts, getSingleProduct, addProduct, updatedProduct, deleteProduct }