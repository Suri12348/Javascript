//forloop
for(var step =0; step <6; step= step+1){
    console.log(`${step+1} time(s) circle is completed`);
}

for(let step =0; step<4; step= step+1){
    console.log(`${step+1} SJC (B.E) successfully completed `);

}


//for of loop
let fruitboule=[
    {fruitinbox:1,fruitName:"Apple"},
    {fruitinbox:2,fruitName:"grapes"},
    {fruitinBox:3,fruitname:"Banana"},
    {fruitinBox:4,fruitname:"mango"},
]
for(let fruits of fruitboule){
    console.log(fruits);
}

let fruits=["Apple","Grapes","Banana","Mango"];
for (let fruit of fruits){
    console.log(fruit);


    if(fruit=="Grapes"){
        console.log("i want grapes ");
    }
   if (fruit=="Mango"){
        console.log("i hate mango");
    }
}
//for-of loop
var games=[
    {game1:"cricket"},
    {game2:"chess"},
    {game3:"football"},
]
for(var  game of games){
    //console.log(game);
   
    
     if(games =="cricket"){
        console.log("i want all games");
     }   
}

//for-in loop
let employeeDetails={
    employeeName:"suri",
    employeeId:123,
    employeeAddress:"Bengaluru",
    employeeOffice:"SRD",

}
for(let property in employeeDetails){
    console.log(employeeDetails[property]);   
}

//for-in loop

let Restarent=["Biriyani","chicken","mutton","fish","fronce"];
    for(iteams in Restarent){
        console.log(Restarent);

    if (iteams == Restarent);
    console.log("i want Mutton curry with rotyes");

    }

//while loop
//while-->Target->you are doing some work
let employeeposition=1;
let employeeList= [
    {employeeposition:1, employeeName:"suri"},//0
    {employeeposition:2, employeeName:"suresh"},//1
    {employeeposition:3, employeeName:"lucky"},//2
    {employeeposition:4, employeeName:"bujja"},//3
    {employeeposition:5, employeeName:"sweety"},//4
    
       
]
while(employeeposition < 5){
    console.log(employeeList[employeeposition].employeeName);
    employeeposition=employeeposition +1;

}