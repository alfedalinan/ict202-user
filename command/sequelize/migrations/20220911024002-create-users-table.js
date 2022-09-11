module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NULL ON UPDATE CURRENT_TIMESTAMP')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('Users')
  }
}
