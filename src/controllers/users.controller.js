import User from '../models/users.model';

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

export const getUserByID = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
}

export const updateUserByID = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedUser);
}

export const deleteUserByID = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "The user was deleted successfully."});
}
