//button click example
document.getElementById("btn-show-message").onclick = ()=>{
    document.getElementById("p-message").innerHTML = "Hi Portia";
};

//link click example
//e is the event (Clicking)
//e.currentTarget is the element the event was performed on (the link)
document.getElementById("a-click").onclick = (e) =>{
    e.preventDefault(); //not go to the link's destination
    e.currentTarget.innerHTML = "Clicked";
}

//start and stop the ball bouncing
document.getElementById("btn-bounce").onclick = (e) => {
    const ball = document.getElementById("ball");

    if(e.currentTarget.innerHTML.toLowerCase() == "start"){
        e.currentTarget.innerHTML = "stop";
        ball.classList.add("bounce");
    } else {
        e.currentTarget.innerHTML = "start";
        ball.classList.remove("bounce");
    }
}

document.getElementById("txt-num-days").onchange = (e) =>{
    const numEntered = parseInt(e.currentTarget.value);
    const p = document.getElementById("p-plant-message");

    if(numEntered <= 0){
        p.innerHTML = "Yay! We were fed today!";
    } else if (numEntered <=2){
        p.innerHTML = "I'm getting a little thirsty";
    } else if (numEntered <= 5){
        p.innerHTML = "I'm starting to wilt";
    }
    else{
        p.innerHTML = "You killed me :(";
    }
}

const p = document.getElementById("p-count-display");
let count = 0;
let countInterval;
const startButton = document.getElementById("btn-start-count");

document.getElementById("toggle-nav").onclick = () => {
    document.querySelector("#main-nav ul").classList.toggle("hide-small");
};

startButton.onclick = () => {
    countInterval = setInterval(()=>{
        p.innerHTML = count ++;
    },500)
};

document.getElementById("btn-pause-count").onclick = () => {
    clearInterval(countInterval);
};

document.getElementById("btn-stop-count").onclick = () => {
    startButton.disabled = false;
    count = 0;
    clearInterval(countInterval);
};

/* Display the date */
setInterval(()=>{
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDay();
    const year = today.getFullYear();
    const hours = today.getHours();
    const seconds = today.getSeconds();
    const minutes = today.getMinutes();

    document.getElementById("p-date").innerHTML = `${hours}:${minutes}:${seconds}, ${month}/${day}/${year}`;
}, 500);