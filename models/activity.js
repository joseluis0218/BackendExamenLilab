'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsTo(models.Client,{
        foreignKey : 'clientId'
      });
    }
  };
  Activity.init({
    description: DataTypes.STRING,
    activityDate : DataTypes.DATE,
    active: DataTypes.BOOLEAN,
    clientId: {
      type: DataTypes.INTEGER,
      references: { model: 'Clients', key: 'id' }
    } 
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};