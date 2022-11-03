const Categories = require('../../models/categories.models')

//To insert bulk info into the database we use the bulkCreate function and
//pass an array of objects
Categories.bulkCreate([
  {id: 1, name: 'Postgres'},
  {id: 2, name: 'A la parrilla'},
  {id: 3, name: 'Ensaladas'},
  {id: 4, name: 'Guarniciones'},
  {id: 5, name: 'Pescados y mariscos'},
  {id: 6, name: 'Botanas'},
  {id: 7, name: 'Pastas'},
  {id: 8, name: 'Sopas'},
  {id: 9, name: 'Desayunos'},
  {id: 10, name: 'Panes'},
  {id: 11, name: 'Platos fuertes'},
  {id: 12, name: 'Bebidas'}
])