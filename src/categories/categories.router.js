const router = require('express').Router()
const categoriesServices = require('./categories.services')

//Root route /
//Categories id /:id

router.route('/')
  .get(categoriesServices.getAllCategories)
  .post(categoriesServices.postCategory) //TODO: create a protected route of this same route by admin



router.route('/:id')
  .get(categoriesServices.getCategoryById)
  .delete(categoriesServices.deleteCategory) //TODO: create a protected route of this same route by admin


module.exports = router