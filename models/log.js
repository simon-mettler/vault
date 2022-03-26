'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Log.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		log_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		log_value: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		log_type: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'log_type',
				key: 'id'
			}
		},
  }, {
    sequelize,
    modelName: 'log',
		timestamps: false,
		freezeTableName: true,
  });
  return Log;
};
