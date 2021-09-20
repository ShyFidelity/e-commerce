const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // try {
  //   const libraryCardData = await LibraryCard.findAll({
  //     include: [{ model: Reader }],
  //   });
  //   res.status(200).json(libraryCardData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/:id', (req, res) => {
  
  // try {
  //   const libraryCardData = await LibraryCard.findByPk(req.params.id, {
  //     include: [{ model: Reader }],
  //   });

  //   if (!libraryCardData) {
  //     res.status(404).json({ message: 'No library card found with that id!' });
  //     return;
  //   }

  //   res.status(200).json(libraryCardData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.post('/', (req, res) => {
  // try {
  //   const locationData = await LibraryCard.create({
  //     reader_id: req.body.reader_id,
  //   });
  //   res.status(200).json(locationData);
  // } catch (err) {
  //   res.status(400).json(err);
  // }
  // create a new category
});

router.put('/:id', async (req, res) => {
  // try {
  //   const userData = await User.update(req.body, {
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   if (!userData[0]) {
  //     res.status(404).json({ message: 'No user with this id!' });
  //     return;
  //   }
  //   res.status(200).json(userData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // try {
  //   const locationData = await Location.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   });

  //   if (!locationData) {
  //     res.status(404).json({ message: 'No location found with this id!' });
  //     return;
  //   }

  //   res.status(200).json(locationData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  // delete a category by its `id` value
});

module.exports = router;
