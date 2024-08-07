const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }]
    });
    if(!categoryData) {
      res.status(404).json({ message: 'No category found with that iD!' });
      return; 
    }
    res.status(200).json(categoryData);
   } catch (err) {
      res.status(500).json(err);
  }
  
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    categoryId: req.body.categoryID,
    categoryName: req.body.categoryName,
  })
  .then((newCategory) => {
    
    res.json(newCategory);
    })
    .catch((err) => {
    res.json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      categoryId: req.body.categoryID,
      categoryName: req.body.categoryName,
    },
    {
      where: {
        isbn: req.params.isbn,
      },
    }
  )
  .then((updatedCategory) => {
    res.json(updatedCategory);
    })
  .catch((err) => res.json(err)); 
  
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
    id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
