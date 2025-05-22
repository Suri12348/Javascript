var singnalName = "wi-fi";

//local Block-1
function Room1(){
    let room1FanStatus = "speed";
    console.log("Room1-global",singnalName);
     
    console.log(room1FanStatus);
}
//local Block-2
function Room2(){
    let room2Fanstatus = "slow";
    console.log("Room1-global",singnalName);

    console.log(room2Fanstatus);

}
Room1();
Room2();    

//console.log(room1FanStatus);
//console.log(room2Fanstatus);