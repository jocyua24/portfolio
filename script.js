const hoverSize = "4.0";
const hoverColor = "blue";
const animationDuration = "0.s5s";

allPathElements = document.getElementsByTagName("path");
for (var i = 0; i < allPathElements.length; i++) {
    allPathElements[i].onmouseover = function () { hoverAnimation(this) };
    allPathElements[i].onmouseout = function () { resetElementStyles(this) };
}

function hoverAnimation(element) {
    element.style.fill = hoverColor;
    element.style.transform = `scale(${hoverSize})`;
    element.style.transition = `all ${animationDuration}`;
}

function resetElementStyles(element) {
    element.style.fill = "black";
    element.style.transform = "scale(1)";
}
