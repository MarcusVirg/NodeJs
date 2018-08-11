describe('App', () => {

  test('should call the spy correctly', () => {
    var spy = jest.fn()
    spy()
    expect(spy).toHaveBeenCalled()
  })

})