const { model, Schema } = require('../connection')

const mySchema = new Schema({
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now }
})


module.exports = model('post', mySchema)