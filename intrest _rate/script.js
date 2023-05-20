function cla(){
    var months = Number(document.getElementById("monday").value);
    var rate = 0;
    //console.log(months);

    if(months<3){
        rate = 5.3;
    }
    else if(months>=3 && months<5){
        rate = 6.4;
    }
    else if(months>=5 && months<7){
        rate = 8.9;
    }
    else{
        rate = 9.6;
    }

    document.getElementById("shit").innerHTML="Your intrest rate is " + rate + "%";
}