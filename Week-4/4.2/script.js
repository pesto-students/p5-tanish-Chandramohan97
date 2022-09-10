// Showcasing Inheritance and Prototype in Javascript with usage of classes( The ES5 way)

let Person = function(){};

let Teacher = function(){}; 

Person.prototype.initialise = function( name , age){   
    this.name = name; 
    this.age  = age;
}

Object.setPrototypeOf( Teacher.prototype , Person.prototype);    // Changing [[Protoype]] of Teacher.prototype to Person.protoype

let him = new Teacher();

him.initialise('Adam',45);  
// console.log(him)   him = name : Adam , age : 45.

function teach(subject){
    return this.name + " is now teaching " + subject;
}

him.teach = teach; // teach method points to 'teach' function which was declared in the global scope. 

him.teach("Inheritance");   // Adam is now teaching Inheritance.

