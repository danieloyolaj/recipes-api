const Categories = require('../models/categories.models')

//Controller to get all the categories
const getAllCategories = async() => {
  const data = await Categories.findAll()
  return data
}

//Controller to get one specific category
const getCategoryById = async (id) => {
  const data = await Categories.findOne({ where: {id}})
  return data
}

//Controller to create a category
const createCategory = async (name) => {
  const data = await Categories.create({name})
  return data
}

//Controller to delete a category
const deleteCategory = async (id) => {
  const data = await Categories.destroy({where: {id}})
  return data
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory
}