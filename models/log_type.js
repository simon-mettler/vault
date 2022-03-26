'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Log_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log_type.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING,
			allownull: false
		},
		unit: {
			type: DataTypes.STRING
		},
		data_type: {
			type: DataTypes.STRING,
			allowNull: false
		},
		is_daily: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		is_active: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
  }, {
    sequelize,
    modelName: 'log_type',
		timestamps: false,
		freezeTableName: true,
  });
  return Log_type;
};
