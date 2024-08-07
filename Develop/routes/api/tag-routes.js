const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});




router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product }]
    });
    if(!tagData) {
      res.status(404).json({ message: 'No tag found with that iD!' });
      return; 
    }
    res.status(200).json(driverData);
   } catch (err) {
      res.status(500).json(err);
   }
  
});


router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tagID: req.body.tagID,
    tagName: req.body.tagName,
  })
  .then((newTag) => {
    
  res.json(newTag);
  })
  .catch((err) => {
  res.json(err);
  });
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tagId: req.body.tagID,
      tagName: req.body.tagName,
    },
    {
      where: {
        isbn: req.params.isbn,
      },
    }
  )
  .then((updatedBook) => {
    res.json(updatedBook);
    })
  .catch((err) => res.json(err));
});


router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
    id: req.params.id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});



module.exports = router;


