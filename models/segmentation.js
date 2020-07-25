'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Segmentation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Segmentation.belongsToMany(models.Client, {
        through: 'ClientSegmentations',
        foreignKey: 'segmentationId'
      });
    }
  };
  Segmentation.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Segmentation',
  });
  return Segmentation;
};