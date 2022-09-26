const {verifyToken } = require('../controllers/user')

module.exports = (router) => {
    router.post("/user/:id", verifyToken)
}