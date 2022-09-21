const {test } = require('../controllers/user')

module.exports = (router) => {
    router.post("/usertest", test)
}