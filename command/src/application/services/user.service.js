const { User } = require("../entities");

async function create(data) {

    const inserted = await User.build(data).save()
    const { id } = inserted
    const created = await User.findOne({
        where: {
            id
        }
    })

    return created.dataValues || null
}

async function update(id, data) {
    const updated = await User.update(data, {
        where: {
            id
        }
    })

    return { id, ...data }
}

async function remove(id) {
    const removed = await User.destroy({
        where: {
            id
        }
    })

    return removed
}

module.exports = {
    create,
    update,
    remove
}