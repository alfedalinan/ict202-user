const config = require('../src/shared/config')

module.exports = {
    development: {
        username: config.MYSQL_USER,
        password: config.MYSQL_PASSWORD,
        database: config.MYSQL_DATABASE,
        host: config.MYSQL_HOST,
        dialect: "mysql"
    }
}
