const { verifyTokenAndAuthenticate, verifyTokenAndAdmin } = require('../controllers/verifyToken')
const { patch, remove, getById, get } = require('../controllers/user')

module.exports = (router) => {
    router.put("/user/:id", verifyTokenAndAuthenticate, patch)
    router.delete('/user/id', verifyTokenAndAuthenticate, remove)
    router.get('user/get-by-id/:id', verifyTokenAndAdmin, getById);
    router.get('user/get', verifyTokenAndAdmin, get);

}