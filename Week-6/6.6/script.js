// Implementing for Question 6.6 : 3 sum closest to a target //

function targetSum( arr , target){

    let init_Sum = arr[0] + arr[1] + arr[2];
    let min = Math.abs(init_Sum - target);
    let sum2 , sum3 = 0;
    for( i = 0 ; i < arr.length  ; i++){
        for(j = i+1 ; j < arr.length ; j++){
            let sum2 = arr[i]+arr[j];  // sum of 2 elements
            for( k = j+1 ; k < arr.length ; k++){
                sum3 = sum2 + arr[k];       //sum of 3 elements

                if( Math.abs(sum3 - target) < min){
                        min = Math.abs(sum3 - target);
                        init_Sum = sum3;
                }

            }
        }

    }
    return init_Sum;
}

targetSum([-1,2,1,4], 1);

