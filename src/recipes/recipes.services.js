const recipesControllers = require('./recipes.controllers')

const getAllRecipes = (req, res) => {
  recipesControllers.getAllRecipes()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getRecipeById = (req, res) => {
  const id = req.params.recipe_id
  recipesControllers.getRecipesById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
        res.status(404).json({message: 'Invalid ID.', id})
      }
      res.stats(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const createRecipe = (req, res) => {
  const userId = req.user.id
  const { title, description, urlImg, time, portions, categoryId, origin } = req.body
  if(title && description && time && portions && categoryId){
    recipesControllers.createRecipe({title, description, urlImg, time, portions, categoryId, origin, userId})
      .then(data => {
        res.status(201).json(data) //When we create a new recipe the status is 201
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  }else{
    res.status(400).json({
      message: 'Invalid data',
      fields: {
        title: 'string',
        description: 'string',
        time: 'integer',
        portions: 'integer',
        categoryId: 'number'
      }
    })
  }
}

const patchRecipe = (req, res) => {
  const id = req.params.recipe_id
  const { title, description, urlImg, time, portions, categoryId, origin } = req.body //This is to limit the options for the user to change the data
  recipesControllers.updateRecipe(id, {title, description, urlImg, time, portions, categoryId, origin})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'Recipe updated successfully!'})
      }else{
        res.status(400).json({message: 'Invalid ID.'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteRecipe = (req, res) => {
  const id = req.params.id
  recipesControllers.deleteRecipe(id)
    .then(data => {
      if(data){
        res.stats(204).json()
      }else{
        res.stats(404).json({message: "Invalid ID"})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  patchRecipe,
  deleteRecipe
}