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

document.getElementById("btn-display-donation").onclick = () => {
    const errorP = document.getElementById("p-donation-error");
    errorP.innerHTML = "";

    const donationText = document.getElementById("txt-donation").value;

    if(isNaN(donationText) || donationText < 0){
        errorP.innerHTML = "* invalid amount";
        return;
    }

    donation = parseInt(donationText);
    const percentGoal = donation/5000 * 100;
    let percented = percentGoal + "%";

    document.getElementById("p-donation").innerHTML = `You've reached ${percentGoal}% of your goal.`;

    document.querySelector(":root").style.setProperty("--donation", percentGoal + "%");
}

document.getElementById("btn-first-loop").onclick = () => {
    const ul = document.getElementById("ul-first-loop");

    for(let i = 0; i < 20; i++){
        const li = document.createElement("li");
        li.innerHTML = `I'm the ${i+1} element`;
        ul.append(li);
    }
};

document.getElementById("btn-count-range").onclick = () => {
    const startNumber = parseInt(document.getElementById("txt-start").value);
    const endNumber = parseInt(document.getElementById("txt-end").value)
    const errorP = document.getElementById("error-range");
    errorP.innerHTML = "";
    divNumRange = document.getElementById("number-range");

    if(startNumber > endNumber) {
        errorP.innerHTML = "not a valid range";
        return;
    }

    for(let i = startNumber; i < endNumber; i++){
        const p = document.createElement("p");
        p.innerHTML = i;
        divNumRange.append(p);
        p.onclick = () => {
            document.getElementById("number-message").innerHTML = `You clicked the ${i}th item`;    
        };
    }
};

document.getElementById("a-show-toys").onclick = (e) => {
    e.preventDefault();//don't do to the link destination
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["fish","guitar","popsicle sticks","rc cars","shoe"];

    //traditional for loop
    
    for(let i = 0; i < toys.length; i++){
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }
    //(toy,i)
    //second way preferred
    toys.forEach((toy) => {
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
    
};

//associative array
const toyPrices = [];
toyPrices["fish"] = 2.99;
toyPrices["guitar"] = 200.00;
toyPrices["popsicle sticks"] = 0.1;
toyPrices["rc car"] = 59.99;
toyPrices["shoe"] =49.99;

for(let toy in toyPrices) {
    const toyTable = document.getElementById("toy-table");
    const tr = document.createElement("tr");
    toyTable.append(tr);
    const tdToy = document.createElement("td");
    tdToy.innerHTML = toy;
    tr.append(tdToy);

    const tdPrice = document.createElement("td");
    tdPrice.innerHTML = `$${toyPrices[toy]}`;
    tr.append(tdPrice);

    tr.onclick = () => {
        document.getElementById("p-toy-desc").innerHTML = `You want a ${toy} so ask your mom for $${toyPrices[toy]}.`;
    };
}
