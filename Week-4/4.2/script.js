// Showcasing Inheritance and Prototype in Javascript with usage of classes( The ES5 way)

let Person = function(){};

let Teacher = function(){}; 

Person.prototype.initialise = function( name , age){   
    this.name = name; 
    this.age  = age;
}

// teach is now defined in the Teacher's prototype - which will be accessible by the object declared through Teacher function.
Teacher.prototype.teach = function(subject){
    return this.name + "is now teaching " + subject;
}

Object.setPrototypeOf( Teacher.prototype , Person.prototype);    // Changing [[Protoype]] of Teacher.prototype to Person.protoype

let him = new Teacher();

him.initialise('Adam',45);  
// console.log(him)   him = name : Adam , age : 45.

console.log(him.teach("Inheritance"));   // Adam is now teaching Inheritance.

