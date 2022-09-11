const { create, update, remove } = require("../../services/user.service");

async function createUser(parent, args, context, info) {
    const response = await create(args.input)
    return response
}

async function updateUser(parent, args, context, info) {
    const response = await update(args.id, args.input)
    return response
}

async function removeUser(parent, args, context, info) {
    const response = await remove(args.id)
    return response
}

module.exports = {
    Query: { },
    Mutation: {
        createUser,
        removeUser,
        updateUser
    }
}