const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
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
    modelName: 'tag',
  }
);

module.exports = Tag;
