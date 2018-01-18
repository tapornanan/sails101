

module.exports = {

    attributes: {
        firstname: {
            type: 'string',
            required: true
        },
        
        lastname: {
            type: 'string',

        },

        postion: {
            type: 'string'
        },

        quote: {
            type: 'string',
            defaultsTo: ''
        },

        age: {
            type: 'integer'
        }
    }
}