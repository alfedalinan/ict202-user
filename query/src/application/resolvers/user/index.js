const { login } = require("../../services/user.service");

async function loginUser(parent, args, context, info) {
    const response = await login(args.email, args.password)
    return response
}

module.exports = {
    Query: {
        loginUser
    },
    Mutation: { }
}