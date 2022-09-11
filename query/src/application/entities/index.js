const sequelize = require('../../shared/db')
const user = require('./user')

const User = user(sequelize)

module.exports = { User }