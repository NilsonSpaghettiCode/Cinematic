'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Showtimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Movies',
          key: 'id',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
      },
      scheduleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Schedules',
          key: 'id',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
      },
      cinemahallId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CinemaHalls',
          key: 'id',
          onDelete: 'cascade',
          onUpdate: 'cascade',
        },
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
    await queryInterface.dropTable('Showtimes');
  }
};