const typesControllers = require('./types.controllers')

const getAllTypes = (req, res) => {
  typesControllers.getAllTypes()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const getTypeById = (req, res) => {
  const id = req.params.id
  typesControllers.getTypeById(id)
  .then(data => {
    if(data){
      res.status(200).json(data)
    }else{
      res.status(400).json({message: 'Invalid ID.'})
    }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const postType = (req, res) => {
  const { name } = req.body
  if(name){
    typesControllers.createType(name)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(400).json({message: err.message})
      })
  }else{
    res.status(400).json({
      message: 'Invalid data.',
      fields: {
        name: 'string'
      }
    })
  }
}

const updateType = (req, res) => {
  const id = req.params.id
  const { name } = req.body
  typesControllers.updateType(id, {name})
    .then(data => {
      if(data[0]){
        res.status(200).json({message: 'User updated successfully'})
      }else{
        res.status(404).json({ message: 'Invalid ID'})
      }
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
}

const deleteType = (req, res) => {
  const id = req.params.id
  typesControllers.deleteType(id)
    .then(data => {
      if(data){
        res.status(200).json()
      }else{
        res.status(404).json({message: 'Invalid ID.'})
      }
    })
    .catch(err => {
      res.status(404).json({message: err.message})
    })
}

module.exports = {
  getAllTypes,
  getTypeById,
  postType,
  updateType,
  deleteType
}