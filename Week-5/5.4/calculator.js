let mathsOperations = {
    sum : function(a,b){
        return a+b;
    },
    
    diff : function(a,b){
        return a-b;
    },

    product : function(a,b){
        return a*b;
    }

};

module.exports = mathsOperations;  //making the mathsOperations object exportable so it could be imported to different module