const express = require('express')

const router = express.Router();

const userRoutes = require('./user')
const cartRoutes = require('./cart')
const orderRoutes = require('./order')
const productRoutes = require('./product')
const authRoutes = require('./auth')

userRoutes(router);
cartRoutes(router);
orderRoutes(router);
productRoutes(router);
authRoutes(router);

module.exports = router