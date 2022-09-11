const { DataTypes } = require('sequelize')

/**
 * @param {sequelize} = Sequelize instance
 * @returns {User} entity
 */

module.exports = (sequelize) => {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT
        },
        role: {
            type: DataTypes.INTEGER
        }
    })

    return User
}
