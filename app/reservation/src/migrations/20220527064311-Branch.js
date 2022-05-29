'use strict';

module.exports = {

  
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Branches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      branchName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      opening: {
        type: Sequelize.TIME
      },
      closing: {
        type: Sequelize.TIME,
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Branches');
     await queryInterface.dropTable('Branchs');
     
  }
};
