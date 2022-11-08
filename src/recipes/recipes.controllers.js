const Recipes = require('../models/recipes.models')
const { Op } = require('sequelize')
const uuid = require('uuid')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')
const Ingredients = require('../models/ingredients.models')
const Instructions = require('../models/instructions.models')
const RecipeIngredients = require('../models/recipes_ingredients.models')
const Types = require('../models/types.models')
const UsersIngredients = require('../models/users_ingredients.models')

const getAllRecipes = async () => {
  const data = await Recipes.findAll({
    attributes: {
      exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
    },
    //Creating joins
    include: [
      { model: Categories },
      { 
        model: Users,
        attributes: ['id', 'firstName', 'lastName']
      },
      { 
        model: Instructions,
        attributes: ['step', 'description']
      },
      { 
        model: RecipeIngredients,
        attributes: ['id', 'amount'],
        include: {
          model: Ingredients,
          include: {
            model: Types
          }
        }
      }
    ]
  })

  return data
}

const getRecipesById = async (id) => {
  const data = await Recipes.findOne({
      where: {
        id
      },
      attributes: {
        exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
      },
      //Creating joins
      include: [
        { model: Categories },
        { 
          model: Users,
          attributes: ['id', 'firstName', 'lastName']
        },
        { 
          model: Instructions,
          attributes: ['step', 'description']
        },
        { 
          model: RecipeIngredients,
          attributes: ['id', 'amount'],
          include: {
            model: Ingredients,
            include: {
              model: Types
            }
          }
        },
      ]
    })
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
  return response
}

const updateRecipe = async (id, data) => {
  const response = await Recipes.update(data, {where: {id}})
  return response
}

const deleteRecipe = async (id) => {
  const data = await Recipes.destroy(data, {where : {id}})
  return data
}

const getMyRecipes = async (userId) => {
  const userIngredients = await UsersIngredients.findAll({ //This will return an array of objects
    attributes: ['ingredientId'],
    where: {userId}
  })
  const filteredIngredients = userIngredients.map(obj => obj.ingredientId)
  const recipeIngredients = await RecipeIngredients.findAll({
    where: {
      ingredientId: {
        [Op.in]: filteredIngredients
      }
    }
  })

  const filteredRecipes = recipeIngredients.map(obj => obj.recipeId) //Returns an array with the id of the recepies

  const data = await Recipes.findAll({
    where: { 
      id: {
        [Op.in]: filteredRecipes
      }
    }
  })
  return data
}

module.exports = {
  getAllRecipes,
  getRecipesById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getMyRecipes
}