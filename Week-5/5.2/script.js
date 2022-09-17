// JS code to implement Map using it's API's//

function vowelCount(word){
    lowerCaseWord = word.toLowerCase();
    map = new Map();

    for( let char of lowerCaseWord){
        if( "aeiou".includes(char)){
            if(map.has(char)){
                map.set( char, map.get(char)+1);
        }
        else{
            map.set(char,1);
        }
    }
}
    return map;
}

console.log(vowelCount('Hello World'));

