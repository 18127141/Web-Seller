'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
  
        primaryKey: true,
        type: Sequelize.STRING
      },
      totalPrice: {
        type: Sequelize.DECIMAL
      },
      discountPrice: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      delivery: {
        type: Sequelize.STRING
      },
      pay: {
        type: Sequelize.STRING
      },
      totalProduct: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.STRING,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};