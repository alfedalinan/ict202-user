const { User } = require("../entities");

async function login(email, password) {

    const user = await User.findOne({
        where: {
            email,
            password
        }
    })
    
    return user.dataValues || null
}

module.exports = {
    login
}