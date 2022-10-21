function findJudge(N,trust){
    
    const likesList ={}; //tracking how many likes an element gives
    const beingLikedList = {};  //tracking how many likes an element receives
    let judge = 0;
    
    for( i = 1; i <= N ; i++){
        likesList[i] = 0; 
        beingLikedList[i] = 0;
    }
    
    for(ele of trust){
        likesList[ele[0]]++;
        beingLikedList[ele[1]]++;
    }
    
    for(key in likesList){
        if( likesList[key] == 0){
            judge = key;
            break;
        }
    }
    
    if( beingLikedList[judge] == N - 1)
        return judge;
    else
        return -1;
}

// trust = [[1,3] , [2,3] , [3,1]]
trust = [[1,3], [2,3]]
// console.log(findJudge([1,3],[2,3],[3,1]));
console.log(findJudge(3,trust));   // N = Number of people.

//Time Complexity - O(N). The program traverses through the array's length thrice separately which makes the time 
// complexity O(3N) ~ O(3N)

// Space Complexity - O(N) for the two  object created i.e. likesList and beingLikedList;