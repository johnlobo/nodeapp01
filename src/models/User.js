import {Schema, model} from 'mongoose'

const userSchema = new Schema({
    name: { 
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

export default model('User', userSchema);