const reset = () => {
    document.getElementById("bforb").innerHTML = "";
    document.getElementById("sd").innerHTML = "";
    document.getElementById("angelina").innerHTML = "";

}

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