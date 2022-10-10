const { save, patch, remove, getById, getAllProducts } = require('../controllers/product')
const { verifyTokenAndAdmin } = require('../controllers/verifyToken')

module.exports = (router) => {
    router.post('/products/save', verifyTokenAndAdmin, save)
    router.put('/products/:id', verifyTokenAndAdmin, patch)
    router.delete('/products/:id', verifyTokenAndAdmin, remove)
    router.get('/products/:id', getById)
    router.get('/products', getAllProducts)
}