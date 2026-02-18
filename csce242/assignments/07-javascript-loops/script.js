const createBubble = setInterval(() => {
        const x = Math.floor(Math.random()*(65 - 35) + 35);
        //Math.random()*(max - min + 1)) + min
        const y = Math.floor(Math.random()*(70-65) + 65);
        const root = document.documentElement;
        root.style.setProperty('--starting-point',y);
        const bub1 = document.createElement('div');
        
        bub1.classList.add("bubble");
        bub1.style.left = x+"%";
        bub1.style.top = y+"%";
        document.body.appendChild(bub1); 
        bub1.addEventListener('animationend', () =>{
            bub1.remove();
        });

},300);


window.onload = () => {
    createBubble;
};