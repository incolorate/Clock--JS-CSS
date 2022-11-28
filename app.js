let secondHand = document.querySelector(".second")
let minuteHand = document.querySelector(".minute")
let hourHand = document.querySelector(".hour")
function setDate () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondToDeg = ((seconds / 60 ) * 360) + 90;
    secondHand.style.transform = `rotate(${secondToDeg}deg)`;
    
    const minutes = now.getMinutes();
    const minutesToDeg = ((minutes / 60 ) * 360) + 90
    minuteHand.style.transform = `rotate(${minutesToDeg}deg)`;
    
    const hours = now.getHours();
    const hoursToDeg= ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursToDeg}deg)`;

    
    
    
    // console.log(minutes)
}
setInterval (setDate, 1000)

