const { it, describe } = require('mocha')
const { assert } = require('chai')

//Test syntax:
/**
 * 1. The function to be tested
 * 2. describe function with 2 parameters:
 *  - The description of what function is being tested
 *  - A callback function with other 2 parameters:
 *    - it('description of what it should do)
 *    - Another arrow function with the parameter (done)
 *      - We get the response from the function being tested
 *      - The expected result using assert.equal(response, resultExpected) 
 * */

const add = (a, b) => a + b

describe('Test de la funcion sumar', () => {
  //First test
  it('It should return 12 when we pass 8 and 4', (done) => {
    const response = add(8, 4)
    assert.equal(response, 12)
    done()
  })

  //Second test
  it('It should return 5 when we pass 2 and 3', (done) => {
    const response = add(3,2)
    assert.equal(response, 5)
    done()
  })
})

describe('User controller', () => {
  it('Should return all users', (done) => {
    getAllUsers()
      .then(data => {
        assert.typeOf(data, 'array') 
        done()
      })
  })
})