// Showcasing Inheritance and Prototype in Javascript with usage of classes( The ES5 way)

let Person = function(){};

let Teacher = function(){}; 

Person.prototype.initialise = function( name , age){   
    this.name = name; 
    this.age  = age;
}

Object.setPrototypeOf( Teacher.prototype , Person.prototype);    // Changing [[Protoype]] of Teacher.prototype to Person.protoype
