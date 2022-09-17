const mathsOperations = require('./calculator.js')  // importing mathsOperations object from calculator.js moduel//

//Test case for Adding //
test('Addition of 2 numbers', () =>{
    expect(mathsOperations.sum(10,20)).toBe(30)    
})

//Test case for Subtraction //
test('Difference of 2 numbers', () =>{
    expect(mathsOperations.diff(10,20)).toBe(-10)
})

//Test case for Multiplication //

test('Multiplication of 2 numbers', () =>{
    expect(mathsOperations.product(10,20)).toBe(200)
})