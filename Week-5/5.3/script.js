// Javascript code to implement Set Api//

arr = [1,3,1,89,3,0,89];

function hasDuplicate(arr){
    set = new Set(arr);
    if(set.size == arr.length){
        return true;
    }
    return false;
}

console.log(hasDuplicate(arr));