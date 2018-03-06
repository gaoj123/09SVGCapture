var clearButton=document.getElementById("clear")
var slate=document.getElementById("screen");

var clear=function(e){
    while(slate.hasChildNodes()){
	slate.removeChild(slate.childNodes[0]);
    }
    nowX=0;
    nowY=0;
    started=false;
}

var circle=function(e){
    mouseX=e.offsetX;
    mouseY=e.offsetY;
    nowX=mouseX
    nowY=mouseY
    started=true;
    var c=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx",mouseX);
    c.setAttribute("cy",mouseY);
    c.setAttribute("r",10);
    slate.appendChild(c)
}

var draw=function(e){
    circle(e)
}

slate.addEventListener("click",draw);
clearButton.addEventListener("click",clear);
