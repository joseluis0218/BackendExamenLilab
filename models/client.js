'use strict';
const {
  Model, BOOLEAN
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.belongsToMany(models.Segmentation, {
        through: 'ClientSegmentations',
        foreignKey: 'clientId'
      });
      Client.hasMany(models.Activity,{
        foreignKey : 'clientId'
      });
    }
  };
  Client.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdayDate: DataTypes.DATE,
    active : DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};