//callback hell
function stepOne(callbackfn){
    console.log("step One");
    callbackfn();
}
function stepTwo(callbackfn){
    console.log("stepTwo");
    callbackfn();

}
function stepThree(){
    console.log("stepThree");
    //callbackfn();

}

stepOne(()=>{
    stepTwo(()=>{
        stepThree();

    });
})