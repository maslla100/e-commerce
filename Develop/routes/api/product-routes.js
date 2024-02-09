const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findOne({
      where: { id: req.params.id },
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});


// update product
router.put('/:id', async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id },
    });

    // Replace existing tags with new ones
    if (req.body.tagIds) {
      const existingTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
      const existingTagIds = existingTags.map((tag) => tag.tag_id);
      const newTagIds = req.body.tagIds;
      const newTags = newTagIds.filter((id) => !existingTagIds.includes(id)).map((tag_id) => {
        return {
          product_id: req.params.id,
          tag_id,
        };
      });
      const tagsToRemove = existingTags.filter(({ tag_id }) => !newTagIds.includes(tag_id)).map((tag) => tag.id);

      await ProductTag.destroy({ where: { id: tagsToRemove } });
      await ProductTag.bulkCreate(newTags);
    }

    res.status(200).json({ message: 'Product updated successfully!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Product deleted.' });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
