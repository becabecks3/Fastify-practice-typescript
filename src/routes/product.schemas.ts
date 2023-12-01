import { FromSchema } from 'json-schema-to-ts'
import { FastifySchema } from 'fastify'

// Response and request schemas

const bodySchema = {
    type: "object",
    properties: {
        title: {type: "string"},
        price: {type: "number"}, 
        image: {type: 'string'},
        description: {type: "string"},
        quantity: {type: "number"} 
    },
    required: ['title', 'price', 'image', 'description', 'quantity']
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
                    image: {type: 'string'},
                    description: {type: "string"},
                    quantity: {type: "number"}
                },
                required: ['title', 'price', 'image', 'description', 'quantity']
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
    response: replySchema
}

//Get One
export const getOneProductSchema: FastifySchema = {
    params: paramsSchema,
    response: {
        200: replySchema
    }
}

//Post
export const addProductSchema : FastifySchema = {
    body: bodySchema,
    response: {
        201 : {
            description: 'Product added',
            ...bodySchema
        }
    }
}

//Put
export const updateProductSchema : FastifySchema = {
    params: paramsSchema,
    body: bodySchema,
    response: {
        204 : replySchema
    }
}

//Delete
export const deleteProductSchema : FastifySchema = {
    params: paramsSchema,
    response: {
        204: replySchema
    }
}



