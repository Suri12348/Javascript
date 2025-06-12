//sp.netcore Apis -> api namesAdd commentMore actions

//Fetch  -> return promise

//then you are getting data from datasouce
async function getFirstAPIResult() {
     await fetch(FirstapiAddress).then((result)=>{
           return result.json(); //promise
     }).then((actualDAta)=>{
         console.log(actualData);
     });   // Promise
}

function getSecondAPIPromise() {
    return fetch(SecondApiAddress);  // Promise
}

async function getSecondAPIResult() {
     await fetch(SecondApiAddress).then((result)=>{
           return result.json(); //promise
     }).then((actualDAta)=>{
         console.log(actualData);
     });   // Prom
}