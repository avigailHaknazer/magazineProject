const mongoose = require('mongoose')
const personSchema = {
    fullName: {
        type: String
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    password: {
        type: String,
        trim: true,
        min: [4, 'too low number'],
        max: [10, 'too high number']
    },
    magazines:[{
        type:mongoose.Schema.Types.ObjectId,ref:'magazine'
    }]
}
module.exports = mongoose.model('person', personSchema)