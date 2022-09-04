// Working of Call , Bind and Apply. 
// Bind, Call and Apply sort of work on the same principle i.e. to manipulate the function they're invoking with the
// values provided through the method call. 
// The  difference lies in the way the arguments is/are provided and the invokation process. 
// With Call and Apply, the function can be invoked immediately whereas Bind returns a function - which has to invoked separately.

// Code Below -

let name = {
    firstName: 'Chandra',
    lastName : 'Mohan',   
    
    printFullName : function(){
        console.log(this.firstName + " " + this.lastName);
    },
};



