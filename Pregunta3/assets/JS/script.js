window.onload = function() {
    const ele = document.getElementById("ele1");
    ele.addEventListener("click", function() { pintar(ele, 'yellow'); });
}
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}