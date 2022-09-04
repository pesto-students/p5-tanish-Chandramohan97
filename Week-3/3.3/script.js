function createIncrement(){

    let count =0;    
    function increment(){
        count++;
    }
    
    // using ticks(``) instead of single quotes
    let message = `Count is ${count}`; // message = Count is 0 
    function log(){
        console.log(message);
    }

    return[increment , log];
}
    
const [increment,log] = createIncrement();
increment();
increment();
increment();
log(); // - What is the output.