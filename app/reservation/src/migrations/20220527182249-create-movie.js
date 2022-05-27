'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pg: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      length: {
        allowNull: false,
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      synopsis: {
        type: Sequelize.STRING
      },
      broadcast_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      on_billboard: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};