const slider = document.getElementById('numberSlider');
const output = document.getElementById('sliderValue');
const com = document.getElementById('commentary');

slider.oninput = ()=>{
    output.textContent = slider.value;
    if(slider.value > 45){
        com.innerHTML = "This bed is so comfortable. \u{1F634} Why not stay a while?"
    }
    else if(slider.value > 30){
        com.innerHTML = "It's probably time to get some food in you. \u{1F95E}"
    }
    else if(slider.value > 15){
        com.innerHTML = "You still have time to grab something on your way out. \u{1F968}";
    }
    else{
        com.innerHTML = "You might want to start running. \u{1F3C3}";
    }
}

const e1b = document.getElementById('toggle-1');
const e2b = document.getElementById('toggle-2');
const e1c = document.getElementById('e1');
const e2c = document.getElementById('e2');

e1b.onclick = () => { 
    e1c.classList.remove('hidden');
    e2c.classList.add('hidden');
}

e2b.onclick = () => { 
    e1c.classList.add('hidden');
    e2c.classList.remove('hidden');
}

const today = new Date();
const text = document.getElementById("countdown-text");
const hour = today.getHours();
const minute = today.getMinutes();
const minutesLeft = 30-minute;

if(hour == 8){
    if(minute < 15){
        text.innerHTML = "You've got plenty of time";
    }
    else if(minute < 20){
        text.innerHTML = "You've got time, but don't make any stops";
    }
    else if(minute < 25){
        text.innerHTML = `You've got ${minutesLeft} minutes left, you may want to speed up.`;
    }
    else if(minute < 30){
        text.innerHTML = `There's only ${minutesLeft} until class, run!`;
    }
    else if(minute < 35){
        text.innerHTML = `You're a few minutes late, but you probably won't have missed much yet.`;
    }
    else if(minute < 40){
        text.innerHTML = `Hopefully your professor isn't strict about punctuality`;
    }
    else if(minute < 45){
        text.innerHTML = `You're noticably late, but you should be fine as long as this is relatively abnormal for you.`;
    }
    else{
        text.innerHTML = `You'll probably be marked late, but hopefully you can catch up to the rest of the class using context`;
    }
}
else if(hour > 8 ){
    text.innerHTML = `You might should just cut your losses and go back.`;
}
else if(hour < 8){
    text.innerHTML = `Go back to sleep`;
}