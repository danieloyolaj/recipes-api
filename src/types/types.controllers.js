const typesModel = require('../models/types.models')
const uuid = require('uuid')

const getAllTypes = async () => {
  const data = await typesModel.findAll()
  return data
}

const getTypeById = async (id) => {
  const data = await typesModel.findOne({where: {id: id}})
  return data
}

const createType = async (data) => {
  const response = await typesModel.create({
    id: data.id, //Check if this is correct
    name: data.name
  })
  return response
}

const updateType = async (id, data) => {
  const response = await typesModel.update(data, {where: {id}})
  return response
}

const deleteType = async (id) => {
  const data = await typesModel.destroy(data, {where: {id}})
  return data
}

module.exports = {
  getAllTypes,
  getTypeById,
  createType,
  updateType,
  deleteType
}