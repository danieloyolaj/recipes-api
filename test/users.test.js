const { it, describe } = require('mocha')
const { assert } = require('chai')
const {getAllUsers} = require('../src/users/users.controllers')


describe('User controller', () => {
  it('Should return all users', (done) => {
    getAllUsers()
      .then(data => {
        assert.typeOf(data, 'array') 
        done()
      })
  })
})