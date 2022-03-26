'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
		await queryInterface.bulkInsert('log_type', [
			{
				name: 'Mood',
				unit: null
			}
		]

		)	models.log_type.create({name: 'Testlog Type', unit: 'kg', data_type: 'bool', is_daily: true, is_active: false })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
