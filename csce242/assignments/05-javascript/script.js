/* alert
onload
function
<button>
*/

const makeTriangle = () => {
    let holder = document.getElementById("tri");
    holder.classList.toggle("see");
}

const addBorder = () => {
    document.getElementById("rat").classList.toggle("frame");
}

const dateMessage = () => {
    document.getElementById("text").innerHTML = "You picked the date: " + document.getElementById("date-picker").value;
}

window.onload = () => {
    document.getElementById("geometry").onclick = makeTriangle;
    document.getElementById("rat").onclick = addBorder;
    document.getElementById("date-picker").onchange = dateMessage;
};
