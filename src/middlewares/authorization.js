import jwt from 'jsonwebtoken';
import config from '../config/config';
import User from '../models/users.model';
import Role from '../models/roles.model';

export const verifyToken = async (req, res, next) => {
    try{
        const token = req.headers["access-token"];

        if(!token) return res.status(403).json({message: "No token provided."});
        const decoded = jwt.verify(token, config.JWT.PRIVATE_KEY);
        req.id = decoded.id;

        const user = await User.findById(req.id, {password: 0});
        if(!user) return res.status(404).json({message: "User not found."});
        
        next();
    } catch(error) {
        return res.status(401).json({message: "Unauthorized."});
    }
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.id);
    const role = await Role.find({_id: {$in: user.role}});

    for (let i = 0; i < role.length; i++) {
        if (role[i].name === "admin") {
            next();
            return;
        }
    }
    
    res.status(403).json({message: "User must be admin."});
}
