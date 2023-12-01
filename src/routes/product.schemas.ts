import { FromSchema } from 'json-schema-to-ts'
import { FastifySchema } from 'fastify'

// Response and request schemas

const bodySchema = {
    type: "object",
    properties: {
        title: {type: "string"},
        price: {type: "number"}, 
        description: {type: "string"},
        quantity: {type: "number"} 
    },
    required: ['title', 'price', 'description', 'quantity']
} as const

export type Body = FromSchema<typeof bodySchema>

const paramsSchema = {
    type: "object",
    properties: {
        id: {type: "string"}    
    } 
} as const

export type Params = FromSchema<typeof paramsSchema>

const replySchema = {
    type: 'object',
    properties: {
        products: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    title: {type: "string"},
                    price: {type: "number"}, 
                    description: {type: "string"},
                    quantity: {type: "number"}
                },
                required: ['title', 'price', 'description', 'quantity']
            }                            
        }   
    }, 
    required: ['products']  
} as const


export type Products = FromSchema<typeof replySchema>

export type Reply = FromSchema<typeof replySchema>

//Routes schemas

//Get All
export const getProductsSchema: FastifySchema = {
    tags: ['Products'],
    description: 'Get all products',
    response: {
        200: {
            ...replySchema
        },
        404: {
            description: 'Not found'
        }
    }
}

//Get One
export const getOneProductSchema: FastifySchema = {
    tags: ['Products'],
    description: 'Get product by id',
    params: paramsSchema,
    response: {
        200: {
            ...replySchema
        },
        404: {
            description: 'Not found'
        }
    }
}

//Post
export const addProductSchema : FastifySchema = {
    tags: ['Products'],
    description: 'Add a product',
    body: bodySchema,
    response: {
        201 : {
            description: 'Product added',
            ...bodySchema
        },
        404: {
            description: 'Not found'
        }
    }
}

//Put
export const updateProductSchema : FastifySchema = {
    tags: ['Products'],
    description: 'Update product',
    params: paramsSchema,
    body: bodySchema,
    response: {
        204 : {
            description: 'Product updated'
        },
        404: {
            description: 'Not found'
        }
    }
}

//Delete
export const deleteProductSchema : FastifySchema = {
    tags: ['Products'],
    description: 'Delete product',
    params: paramsSchema,
    response: {
        204: {
            description: 'Product deleted'
        },
        404: {
            description: 'Not found'
        }
    }
}



