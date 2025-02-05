const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  // define columns
  {
   id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
   },
   product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Product',
      key: 'id',
    },
   },
   tag_id: {
    type: DataTypes.INTEGER,
    refernces: {
      model: 'Tag',
      key: 'id',
    },
   },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ProductTag',
  }
);

module.exports = ProductTag;
