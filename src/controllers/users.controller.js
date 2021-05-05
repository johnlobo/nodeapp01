import User from '../models/User'

export const createUSer = async (req, res) => {
    console.log(req.body);
    const {name, password} = req.body
    const newProduct = new User({name, password});
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
}

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

export const getUserById = (req, res) => {
    
}

export const updateUserById = (req, res) => {
    
}

export const deleteUserById = (req, res) => {
    
}