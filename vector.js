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
    c.setAttribute("fill","red");
    c.addEventListener("click",action);
    slate.appendChild(c)
}

var action=function(e){ //only called if a circle (and not blank space) has been clicked since this is a function attached to the event listener of circles
    cir=e.target;
    if (cir.getAttribute("fill")=="red"){ //first time clicking circle
	cir.setAttribute("fill","purple"); //changes the color of the circle clicked
    }
    else{ //second time clicking circle
	slate.removeChild(cir); //removes the circle clicked
	ranX=Math.floor(Math.random()*490) //generates random cors for new circle
	ranY=Math.floor(Math.random()*490)
	var c=document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx",ranX);
	c.setAttribute("cy",ranY);
	c.setAttribute("r",10);
	c.setAttribute("fill","red");
	c.addEventListener("click",action);
	slate.appendChild(c) //adds new circle
    }
    e.stopPropagation(); //since a circle has been clicked on, we need to prevent the canvas from adding more red circles upon click (normal response if we had clicked on blank section of the svg area)
}

var draw=function(e){
    circle(e)
}

slate.addEventListener("click",draw);
clearButton.addEventListener("click",clear);
