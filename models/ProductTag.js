const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Driver.hasOne(License, {
    //   foreignKey: 'driver_id',
    //   onDelete: 'CASCADE',
    // });
    
    // License.belongsTo(Driver, {
    //   foreignKey: 'driver_id',
    // });
    
    // Driver.hasMany(Car, {
    //   foreignKey: 'driver_id',
    //   onDelete: 'CASCADE',
    // });
    
    // Car.belongsTo(Driver, {
    //   foreignKey: 'driver_id',
    // });
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
