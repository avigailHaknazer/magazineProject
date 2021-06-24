const mongoose = require('mongoose')
const postSchema = {
    header: {
        type: String
    },
    content: {
        type: String
    },
    date: {
        type: Date
    },
    magazine: {
        type: mongoose.Schema.Types.ObjectId, ref: 'magazine'
    }
}
module.exports = mongoose.model('post', postSchema)