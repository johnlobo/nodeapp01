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

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
}

export const updateUserById = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    });
    res.status(200).json(updatedUser);
}

export const deleteUserById = async (req, res) => {
    const {userId} = req.body
    await User.findByIdAndDelete(userId);
    res.status(204);
}