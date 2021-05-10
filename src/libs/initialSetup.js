import Role from '../models/Role'

export const createRoles = async () => {
    
    const count = await Role.estimatedDocumentCount();
    
    if (count>0) return;

    const values = await Promise.all([
    new Role({name:'User'}).save(),
    new Role({name:'Admin'}).save()
    ]);

    console.log(values);
}