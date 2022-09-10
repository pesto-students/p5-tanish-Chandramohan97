// Implementing Fibonacci series with Iterators. 

let Fib = { 
    [Symbol.iterator](){
        let term1 = 0, term2 = 1, term3; 
        i = 3;
        n= 8                        // n here is set to 8. User can change the value as per need.

        console.log(term1);         
        console.log(term2);

        // Printing the first two terms of Fibonacci series as they are alwasy constant.

        return{
            next : function(){

            }
        }
    }
}