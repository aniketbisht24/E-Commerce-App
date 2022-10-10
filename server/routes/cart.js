const { save, patch, remove, getByUserId, getAll } = require('../controllers/cart')
const { verifyTokenAndAuthenticate, verifyTokenAndAdmin } = require('../controllers/verifyToken')

module.exports = (router) => {
    router.post('/cart/save', verifyTokenAndAuthenticate, save)
    router.put('/cart/:id', verifyTokenAndAuthenticate, patch)
    router.delete('/cart/:id', verifyTokenAndAuthenticate, remove)
    router.get('/cart/:id', verifyTokenAndAuthenticate, getByUserId)
    router.get('/cart', verifyTokenAndAdmin, getAll)

}