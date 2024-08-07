// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany('Tags',
  {through: ProductTag
  }
  );

// Categories have many Products
Category.hasMany(Product);
//Tag belongs to many Products 
Tag.belongsToMany('Products',
  {through: ProductTag
  });
// Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

ProductTag.belongsTo(Product); 
ProductTag.belongsTo(Tag); 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
