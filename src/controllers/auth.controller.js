import User from '../models/users.model';
import Role from '../models/roles.model';
import config from '../config/config';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
    const {fullname, username, email, password, neighborhood, role} = req.body;

    const newUser = new User({
        fullname,
        username,
        email,
        password: await User.encryptPassword(password),
        neighborhood
    });

    if (role){
        const foundRole = await Role.find({name: {$in: role}})
        newUser.role = foundRole.map(role => role._id)
    } else {
        const role = await Role.findOne({name: "user"});
        newUser.role = [role._id];
    }

    const emailFound = await User.findOne({email: req.body.email});
    const usernameFound = await User.findOne({username: req.body.username});

    if(!emailFound && !usernameFound){
        const savedUser = await newUser.save();
        console.log(savedUser);

        const token = jwt.sign({id: savedUser._id}, config.JWT.PRIVATE_KEY, {
            expiresIn: config.JWT.EXPIRES_TIME
        });

        res.status(200).json({token});
    } else {
        res.status(400).json({message: "User already exists."});
        console.error(error);
    }
}

export const signIn = async (req, res) => {
    const usernameFound = await User.findOne({username: req.body.username}).populate("role");
    if (!usernameFound) return res.status(400).json({message: "Username not found."});

    const emailFound = await User.findOne({email: req.body.email}).populate("role");
    if (!emailFound) return res.status(400).json({message: "Email not found."});

    const matchPassword = await User.comparePassword(req.body.password, emailFound.password);
    
    if (!matchPassword) {
        res.status(401).json({token: null, message: "Invalid password."});
    } else {
        console.log(usernameFound, emailFound);
        const token = jwt.sign({id: usernameFound._id}, config.JWT.PRIVATE_KEY, {
            expiresIn: config.JWT.EXPIRES_TIME
        });
        res.json({token: token})
    }
}
