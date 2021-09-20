const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    productTag_id: {
      type: DataTypes.DECIMAL,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
         },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
        unique: false
      }

    },

    tag_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      }

    }
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
