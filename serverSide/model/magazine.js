const mongoose = require('mongoose')
const magazineSchema = {
    header: {
        type: String
    },
    date: {
        type: Date
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'person'
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'post'
    }]

}
module.exports = mongoose.model('magazine', magazineSchema)