const {register: registerSchema} = require('../dto-schemas/auth')
const Validator = require('../utils/validator')

const register = async(req, res) => {

    const {body: {mobileNumber, type}} = req;

    const {errors, data } = Validator.isSchemaValid({data: {mobileNumber, type}, schema: registerSchema })

    if(errors){
        res.status(400).json(errors);
    }
    
    
}

module.exports = {
    register
}