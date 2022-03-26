'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('log_type', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
				allownull: false
      },
      unit: {
        type: Sequelize.STRING
      },
      data_type: {
        type: Sequelize.STRING,
				allowNull: false
      },
      is_daily: {
        type: Sequelize.BOOLEAN,
				allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
				allowNull: false
      },
    });

		await queryInterface.createTable('log', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			log_date: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			log_value: {
				type: Sequelize.FLOAT,
				allowNull: false
			},
			log_type: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'log_type',
					key: 'id'
				}
			},
		});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dailylogs');
  }
};
