const {register} = require('../controllers/auth')
 
module.exports = (router) => {
    router.post('/auth/register', register)
}