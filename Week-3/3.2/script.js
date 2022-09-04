// Working of Call , Bind and Apply. 
// Bind, Call and Apply sort of work on the same principle i.e. to manipulate the function they're invoking with the
// values provided through the method call. 
// The  difference lies in the way the arguments is/are provided and the invokation process. 
// With Call and Apply, the function can be invoked immediately whereas Bind returns a function - which has to invoked separately.

// Code Below -

let name= {
    firstName: 'Chandra',
    lastName : 'Mohan', 
    
};

 function printDetails (age, city) {
        console.log( this.firstName + " " + this.lastName + " who is " + age + " and from " + city);
    }  // Removing the method from the name object and declaring it outside as a function since we're going to re-use this function multiple time

let name2={
    firstName : 'Kavya',
    lastName : 'Srivastava',
};


printDetails.call(name2, "24 yrs old" , "Kanpur"); // In call method - the arguements are provided one by one.
printDetails.apply(name2, ["24 yrs old" , "Kanpur"]); // In Apply method - the arguements are provided in arrays. Rest - no such differences between call and apply. 

let printDetailsBind = printDetails.bind(name2,"24 yrs old" , "Kanpur"); // In bind method - a function is returned , which needs to be invoked. The bind function returns a permanent copy and cannot be altered.

printDetailsBind();



