const hoverSize = "4.0";
const hoverColor = "blue";
const animationDuration = "0.5s";
const linkIds = ["aboutme", "digital", "drawing", "painting", "work"];
allPathElements = document.getElementsByTagName("path");
for (var i = 0; i < allPathElements.length; i++) {
    if (!linkIds.includes(allPathElements[i].parentElement.id)) {
        allPathElements[i].onmouseover = function () { hoverAnimation(this, "blue") };
        allPathElements[i].onmouseout = function () { resetElementStyles(this) };
    }
    else {
        allPathElements[i].onmouseover = function () { hoverAnimation(this, "green") };
        allPathElements[i].onmouseout = function () { resetElementStyles(this) };
        allPathElements[i].onclick = function () { clickLink(this) };
    }
}



function hoverAnimation(element, color) {
    element.style.fill = color;
    element.style.transform = `scale(${hoverSize})`;
    element.style.transition = `all ${animationDuration}`;
}

function resetElementStyles(element) {
    element.style.fill = "black";
    element.style.transform = "scale(1)";
}

function clickLink(element)
{
    window.location.pathname = `./${element.parentElement.id}.html`;
}