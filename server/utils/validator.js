const Ajv = require('ajv')

const ajv = new Ajv({
    verbose: true, allErrors: true, $data: true,
})

const isSchemaValid = ({schema, data}) => {
    const validator = ajv.compile(schema);
    const isValid = validator(data)

    if(!isValid){
        return {errors: validator.errors}
    }

    return {data}
}

module.exports = {
    isSchemaValid
}