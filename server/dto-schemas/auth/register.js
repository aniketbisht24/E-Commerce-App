const register = {
    title: 'register authentication of user',
    description: 'A HTTP POST Request',
    type: 'object',
    properties:{
        mobileNumber: {
            type: 'string',
            pattern: '^[1-9]{1}[0-9]{9}',
            maxLength: 10,
        },
        type:{
            type: 'string',
        }
    },
    required: ['mobileNumber'],
    // errorMessage: {
    //     required: {
    //         mobileNumber: 'required'
    //     },
    //     properties:{
    //         mobileNumber: 'not valie'
    //     }
    // },
    additionalProperties: false,
}

module.exports = register