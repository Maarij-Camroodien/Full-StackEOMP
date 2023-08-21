const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router()
//Import all models objects model import the indexs and is exporting a object of users
const {users, products,} = require('../models')
//User Router
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req,res)
})
routes.post('/user', bodyParser.json(),(req, res)=>{
       users.register(req ,res)
})
routes.put('/user/:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})
routes.delete('/user/:id',(req ,res)=>{
    users.deleteUser(req, res)
})

routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})


//============= Books Router =================


routes.get('/products', verifyAToken, (req, res)=>{
    products.fetchProducts(req, res)
})
routes.get('/product/:id', (req, res)=>{
    products.fetchProduct(req,res)
})
routes.post('/product', bodyParser.json(),(req, res)=>{
    products.registerProduct(req ,res)
})
routes.put('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateUser(req, res)
})
routes.patch('/product/:id', bodyParser.json(),(req, res)=>{
    products.updateProduct(req, res)
})
routes.delete('/product/:id',(req ,res)=>{
    products.deleteProduct(req, res)
})

module.exports = {
    express,
    routes
    
}