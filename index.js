var switchLight = false;
var htag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");
// var toogle = document.getElementById("toggle");
document.getElementById("toggle").onclick = function () {
    if (!switchLight) {
        htag.style.color = "white";
        bodyTag.style.backgroundColor = "black";
        circle.style.marginLeft = "100px";
        switchLight = true;
    }
    else {
        htag.style.color = "black";
        bodyTag.style.backgroundColor = "white";
        circle.style.marginLeft = "1px";
        switchLight = false;
    }
}
