// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
