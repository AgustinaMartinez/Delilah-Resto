import Role from '../models/roles.model';
import "regenerator-runtime/runtime.js";

export const createRoles = async () => {
    try{
        const role = await Role.estimatedDocumentCount();

        if (role > 0) return;

        const roles = await Promise.all([
            new Role({name: "user"}).save(),
            new Role({name: "admin"}).save()
        ]);
        console.log(roles);
    } catch (error){
        console.error(error);
    }
}
