const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
   try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Category }],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category available with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(
      req.body
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
   try {
     const categoryData = await User.update(req.body, {
       where: {
         id: req.params.id,
       },
     });
     if (!categoryData[0]) {
       res.status(404).json({ message: 'No category with this id!' });
       return;
     }
     res.status(200).json(categoryData);
   } catch (err) {
     res.status(500).json(err);
   }
 // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
 // delete a category by its `id` value
});

module.exports = router;
