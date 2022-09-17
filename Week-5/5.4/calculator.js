let mathsOperations = {
    sum : function(a,b){     // GIVEN when the user invoke sum function
        return a+b;          // WHEN he passes 2 numeric arguments
    },                       // THEN THE TEST SHOULD PASS 
    
    diff : function(a,b){
        return a-b;
    },

    product : function(a,b){
        return a*b;
    }

};

module.exports = mathsOperations;  //making the mathsOperations object exportable so it could be imported to different module