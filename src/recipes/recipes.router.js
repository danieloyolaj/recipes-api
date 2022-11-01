const router = require('express').Router()
const recipesServices = require('./recipes.services')
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)

// /recipes
// /recipes/:recipes_id

router.route('/')
  .get(recipesServices.getAllRecipes)
  .post(passport.authenticate('jwt', {session: false}), recipesServices.createRecipe)

router.route('/:recipe_id')
  .get(recipesServices.getRecipeById)
  .patch(passport.authenticate('jwt', {session: false}), recipesServices.patchRecipe)
  .delete(passport.authenticate('jwt', {session: false}), recipesServices.deleteRecipe)

module.exports = router