//scope chain
/*{

    //Block1 -scope1
    let fruit1 ="Apple";
    {
        //Block2 -scop2
        let fruit2 ="Mango";
        {
            //Block3 - scope3
            let fruit3 ="kiwi";

            console.log("scope3","fruit2");
            console.log("scope3","fruit1");
            console.log("scope3","fruit3");


        }
        console.log("scope2","fruit1");
        console.log("scope2","fruit2");
    }
    console.log("scope1",fruit1);
}*/

//Global block & Local Block

/*var punjabking ="Punjab";
//local block1
{
    
    let RCB = "bangalore";
    console.log("local-block1",RCB);
    console.log("local-block1",punjabking);
}
//local block2
{
    let SRH = "hyderabad";
    console.log("local-block2",SRH);
    console.log("local-block2",punjabking);
}
console.log("global-block",punjabking);*/

/*// global block
var surendra = "suri";

//local block1

{
   let suresh = "kadapa";
   console.log("local block1",suresh);
   console.log("global block",surendra);
}
//local block2
{
let  lucky = "Bengaluru";
console.log("local block2",lucky);
console.log("global block",surendra);

}
console.log("global block",surendra);*/

//scope chain

/*{
    //Block1-Scope1
    let fruit1 = "Apple";
    {
        //Block2-Scope2
        let fruit2 ="Banana";
        {
            //Block3-Scope3
            let fruit3 = "Mango";
            console.log("scope3",fruit2);
            console.log("scope3",fruit1);
            console.log("scope3",fruit3);
    
        }
        console.log("scope2",fruit2);
        console.log("scope2",fruit1);

    }
    console.log("scope1",fruit1);
}*/

//callback function
/*function getTeamdetails(callbackfn){
    callbackfn("virat","capatin");

}
getTeamdetails(function(playerName,position){
    console.log("suri");
    console.log("player",name);
    console.log(position);
    
})*/

//scope chain

/*{
    //Block1-scope1
    xlet fruit1 ="Apple";
    {
        //Block2-scope2
        let fruit2 = "banana";
        {
            //Block3-scope3
            let fruit3 = "mango";
            console.log("scope3",fruit2);
            console.log("scope3",fruit1);
            console.log("scope3",fruit3);


        }
        console.log("scope2",fruit2);
        console.log("scope2",fruit1);
    }
    console.log("scope1",fruit1);
}*/

/*//global block and local block
var punjabkings = "punjab";
//local block1
{
    console.log("local-block1",punjabkings);
    let SRH = "hyderabad";
    console.log("local-block1",SRH);
    console.log("global-block",punjabkings);
    
}
//local block2
{
    console.log("local-block2",punjabkings);
    let RCB ="Bengaluru";
    console.log("local-block2",RCB);
    console.log("global-block",punjabkings);

}
console.log("global-block",punjabkings);*/

//callback functions

/*function courses(names){
    names();
    console.log(names);
}
courses(function(){
    let Names=["python","java","sql"];
    console.log(Names);
})*/

function courses(names){
    names();
    console.log(names);

}
courses(function(){
    let Names= ["java","python",".Net"];
    console.log(Names);
})

