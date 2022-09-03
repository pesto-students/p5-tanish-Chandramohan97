function createIncrement(){

    let count =0;    
    function increment(){
        count++;
    }
    
    let message = 'Count is ${Count}';
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