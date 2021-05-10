import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'

export const signUp = async (req, res) => {
    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })
    if (roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    } else {
        const role = await Role.find({name: 'user'})
        newUser.roles = [role_id];
    }

    console.log(newUser);

    const savedUser = await newUser.save();
    
    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 84600 // 24Hrs
    })

    res.status(200).json({token});
}

export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email}).populate("roles");
    if (!userFound) return res.status(400).json('Message: User not found');

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(400).json({token: null, message:'Message: User or Password incorrect'})
}
