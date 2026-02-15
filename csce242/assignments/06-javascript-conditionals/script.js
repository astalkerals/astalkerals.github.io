const slider = document.getElementById('numberSlider');
const output = document.getElementById('sliderValue');
const com = document.getElementById('commentary');

slider.oninput = ()=>{
    output.textContent = slider.value;
    if(slider.value > 45){
        com.innerHTML = "This bed is so comfortable. Why not stay a while?"
    }
    else if(slider.value > 30){
        com.innerHTML = "It's probably time to get some food in you."
    }
    else if(slider.value > 15){
        com.innerHTML = "Pack your bag and get ready to head out.";
    }
    else{
        com.innerHTML = "You might want to start running.";
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