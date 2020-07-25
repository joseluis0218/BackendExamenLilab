'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientSegmentation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ClientSegmentation.init({
    tableName: 'client_segmentations',
    clientId: {
      type: DataTypes.INTEGER,
      references: {model: 'Clients',key: 'id'},
      allowNull: false
    },
    segmentationId: {
      type: DataTypes.INTEGER,
      references: {model: 'Segmentations',key: 'id'},
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ClientSegmentation',
  });
  return ClientSegmentation;
};