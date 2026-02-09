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

window.onload = () => {
    document.getElementById("geometry").onclick = makeTriangle;
    document.getElementById("rat").onclick = addBorder;
};
