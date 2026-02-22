const reset = () => {
    document.getElementById("bforb").innerHTML = "";
    document.getElementById("sd").innerHTML = "";
    document.getElementById("angelina").innerHTML = "";

}

/*
document.getElementById("bforblink").onclick = (e) => {
    e.preventDefault();
    reset();
    document.getElementById("bforb").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/1JM8LMLBxe0?si=QTmNJ9zskraRkPzi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
};

document.getElementById("sdlink").onclick = (e) => {
    e.preventDefault();
    reset();
    document.getElementById("sd").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/-wbQY7Hz_Ns?si=nEHPM2BOOKTRgUG9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
};

document.getElementById("angelinalink").onclick = (e) => {
    e.preventDefault();
    reset();
    document.getElementById("angelina").innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/wLvgAvkk-9U?si=BPjIIPW5FTNKUgcP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}
*/

let firstHappy = "true";

const showHappy = () => {
    const happy = [];
    happy["Blueberries for Breakfast by The Mamas and the Papas"] = `<iframe width="560" height="315" src="https://www.youtube.com/embed/1JM8LMLBxe0?si=QTmNJ9zskraRkPzi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    happy["The Safety Dance by Men Without Hats"] = `<iframe width="560" height="315" src="https://www.youtube.com/embed/-wbQY7Hz_Ns?si=nEHPM2BOOKTRgUG9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    happy["Angelina by Harry Belafonte"] =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/wLvgAvkk-9U?si=BPjIIPW5FTNKUgcP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    happy["Why Do You Let Me Stay Here? by She and Him"] = `<iframe width="560" height="315" src="https://www.youtube.com/embed/am2SFmeQOW4?si=dG3C0yAX1pb-_Xpd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    happy["Good Vibrations by the Beach Boys"] = `<iframe width="560" height="315" src="https://www.youtube.com/embed/DsY4Es5p6UM?si=ghOm9Qt5m69gLWy5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

    const video = document.getElementById("video");

    if(firstHappy == "true"){
        for(let song in happy) {
            const songy = document.createElement("a");
            songy.innerHTML = song + "<br>";
            document.getElementById("happy").append(songy);
            
            songy.onclick = () => {
                video.innerHTML = happy[song];
            }
        };
    }
    
    firstHappy = false;
};

let firstSad = "true";

const showSad = () => {
    const sad = [];
    sad["Imagine That by Patsy Cline"] = `<<iframe width="560" height="315" src="https://www.youtube.com/embed/aRkRcotundM?si=RUXL07vqzRV_O43Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    sad["Why Didn't You Stop Me by Mitski"] = `<iframe width="560" height="315" src="https://www.<iframe width="560" height="315" src="https://www.youtube.com/embed/nK84dWFj8Lw?si=dqhsMpAgqSnIBz2d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    sad["Amor Prohibido by Selena"] =  `< <iframe width="560" height="315" src="https://www.youtube.com/embed/TqgxucQP6MA?si=esyRLDIPCCHPuVJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    sad["Nothing Can Ever Change This Love by Sam Cooke"] = `<iframe width="560" height="315" src="https://www.youtube.com/embed/4JHPTHLWubk?si=Ty8jYPz1nU4p1APQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    sad["Mr. Blue by the Fleetwoods"] = `<iframe width="560" height="315" src="https://www.youtube.com/embed/E18L9Zpos7g?si=9zuey97v9ObR4W1J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    const video = document.getElementById("video");

    if(firstSad == "true"){
        for(let song in sad) {
            const songy = document.createElement("a");
            songy.innerHTML = song + "<br>";
            document.getElementById("sad").append(songy);
            
            songy.onclick = () => {
                video.innerHTML = sad[song];
            };
        };
        firstSad = "false";
    }

    
};


const hapsad = document.getElementById("happyorsad");
hapsad.onclick = () => {
    const options = document.getElementById("dropdown-options");
    options.classList.add("show");
    options.classList.remove("hide");
    const dropdownos = document.getElementsByClassName("dropdown");
    document.getElementById("h").onclick = () => {
        hapsad.innerHTML = "Happy ▼";
        showHappy();
        options.classList.add("hide");
        document.getElementById("sad").classList.add("hide");
        document.getElementById("sad").classList.remove("show");
        document.getElementById("happy").classList.add("show");
        document.getElementById("happy").classList.remove("hide");
        
    }
    document.getElementById("s").onclick = () => {
        hapsad.innerHTML = "Sad ▼";
        showSad();
        options.classList.add("hide");
        document.getElementById("happy").classList.add("hide");
        document.getElementById("happy").classList.remove("show");
        document.getElementById("sad").classList.add("show");
        document.getElementById("sad").classList.remove("hide");
    }
}