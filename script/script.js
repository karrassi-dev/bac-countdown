/*
const countDown = () =>{
    const countDate = new Date("june 20,2022 23:59:59").getTime;
    const dateNow = new Date().getTime();
    const dateDiff = countDate - dateNow;

    // how the fuck does time work?
    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    //calculate this shit

    const textDay = dateDiff / day;
    console.log(textDay);
};
countDown();
*/


let countDownDate = new Date("june 20,2022 23:59:59").getTime();
//console.log(countDownDate);

let counter = setInterval(() =>{
    //get date now 
    let dateNow = new Date().getTime();

    //find the difference between now and countdown date
    let dateDiff = countDownDate - dateNow;

    //get time units
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000);
    //console.log(days);
    document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minute").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".second").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    document.querySelector(".timeNow").innerHTML = year ;

},1000)