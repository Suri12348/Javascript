{

    //Block1 -scope1
    let fruit1 ="Apple";
    {
        //Block2 -scop2
        let fruit2 ="Mango";
        {
            Block3 - scope3
            let fruit3 ="kiwi";

            console.log("scope3","fruit2");
            console.log("scope3","fruit1");
            console.log("scope3","fruit3");


        }
        console.log("fruit2","fruit1");
        console.log("fruit2","fruit2");
    }
    console.log("scope1",fruit1);
}