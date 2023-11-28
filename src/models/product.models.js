import { Schema, model } from 'mongoose';

const productSchema = new Schema ({
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number
}, {
    timestamps: true, // Adds createdAt/updatedAt
    versionKey: false, // Deletes __v 
})

export default model('Product', productSchema)


