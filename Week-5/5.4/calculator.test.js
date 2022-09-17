
const mathsOperations = require('./calculator.js')  // importing mathsOperations object from calculator.js moduel//


test('Addition of 2 numbers', () =>{                    // GIVEN when the user invoke sum function
    expect(mathsOperations.sum(10,20)).toBe(30)        // WHEN he/she passes 2 numeric arguments
})                                                    //  THEN the test runs successfully.


test('Difference of 2 numbers', () =>{                // GIVEN when the user invoke difference function
    expect(mathsOperations.diff(10,20)).toBe(-10)    // WHEN he/she passes 2 numeric arguments
})                                                  //  THEN the test runs successfully 


test('Multiplication of 2 numbers', () =>{              // GIVEN when the user invoke product function
    expect(mathsOperations.product(10,20)).toBe(200)    // WHEN he passes 2 numeric arguments  
})                                                      // THEN the test runs successfully