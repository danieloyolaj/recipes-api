const Recipes = require('../models/recipes.models')
const uuid = require('uuid')

const getAllRecipes = async () => {
  const data = await Recipes.findAll()
  return data
}

const getRecipesById = async (id) => {
  const data = await Recipes.findOne({where: {id}})
  return data
}

const createRecipe = async (data) => {
  const response = await Recipes.create({
    id: uuid.v4(),
    title: data.title,
    description: data.description,
    urlImg: data.urlImg,
    time: data.time,
    portions: data.portions,
    userId: data.userId,
    categoryId: data.categoryId,
    origin: data.origin,
    likes: data.likes
  })
  return data
}

const updateRecipe = async (id, data) => {
  const response = await Recipes.update(data, {where: {id}})
  return response
}

const deleteRecipe = async (id) => {
  const data = await Recipes.destroy(data, {where : {id}})
  return data
}

module.exports = {
  getAllRecipes,
  getRecipesById,
  createRecipe,
  updateRecipe,
  deleteRecipe
}