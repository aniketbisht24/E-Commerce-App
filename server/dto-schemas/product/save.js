const save = {
    title: 'login authentication of user',
    description: 'A HTTP POST Request',
    type: 'object',
    properties: {
        title: {
            type: 'string',
        },
        desc: {
            type: 'string',
        },
        img: {
            type: 'string',
        },
        categories: {
            type: 'array',
        },
        size: {
            type: 'array',
        },
        color: {
            type: 'array',
        },
        price: {
            type: 'number',
        }
    },
    required: ['title', 'desc', 'img'],
}

module.exports = save