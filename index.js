

function startTime(){

    let date=new Date();
    let hoursers=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let session="PM"
    
    if (hoursers==0){
        hoursers=12;
    }
    if(hoursers>12){
        hoursers=hoursers-12;
        session="AM"
    }
    hoursers=forwardNew(hoursers);
    minutes=forwardNew(minutes);
    seconds=forwardNew(seconds);

    let time=hoursers + ":" + minutes + ":" + seconds + ""  + session;
    document.querySelector("#MyClock").innerText=time;
    document.querySelector("#MyClock").innerText=time;
    setInterval(startTime,1000);
}
function forwardNew(value){
    if(value<10){
        value="0"+value;
    }
    return value

}
startTime();