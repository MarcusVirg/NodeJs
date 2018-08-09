const expect = require('expect')

const utils = require('./utils')

it('should add two numbers', () => {
  var result = utils.add(33, 11)

  expect(result).toBe(44)
})

it('should async add two numbers', (done) => {
  utils.asyncAdd(5, 6, (sum) => {
    expect(sum).toEqual(expect.any(Number))
    expect(sum).toBe(11)
    done()
  })
})

it('should square a number', () => {
  var result = utils.square(5)

  expect(result)
    .toBe(25)
})

it('should async square a number', (done) => {
  utils.asyncSquare(9, (product) => {
    expect(product).toEqual(expect.any(Number))
    expect(product).toBe(81)
    done()
  })
})

// it('should expect some values', () => {
//   expect(12).not.toBe(11)
//   expect({name: 'Marcus'}).not.toEqual({name: 'marcus'})
//   expect([2,3,4]).not.toContain(1)
//   expect({name: 'Marcus', age: 21, location: 'Minneapolis'}).toEqual(expect.objectContaining({age: 21}))
// })

it('should verify first and last names are set', () => {
  var user = utils.setName({}, 'Marcus Virginia')

  expect(user).toEqual({firstName: 'Marcus', lastName: 'Virginia'})
})