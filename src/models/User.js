import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    name: String,
    password: String
},{
    timestamp: true,
    versionKey: false
})

export default model('User', userSchema);