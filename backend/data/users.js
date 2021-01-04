import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@ex.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Nimesh Mehra',
        email: 'nimesh@ex.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'AdminUser',
        email: 'adminuser@ex.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;