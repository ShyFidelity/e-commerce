// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
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




// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
