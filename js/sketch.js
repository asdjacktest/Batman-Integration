/**
 * [File]   : sketch.js
 * [Author] : r00t
 */

// Variables
var canvas; 
var dot = {
	x:0,
	y:0
};
var origin = {
	x:0,
	y:0
};
var hyperParmas = {
	speed:100,
	canvasWidth:500,
	canvasHeight:500,
	batmanLogoScale:30,
	batmanLogoEllipseSize:35
};
var options = {
	start:false,
	reset:true
};
var startBtn, resetBtnm;
var slider;

var batmanCounter = 0, ellipseCounter = 0;
var statsDiv;

// BatmanCounter, EllipseCounter, BatmanArea, EllipseArea respectively
var BC, EC, BA, EA;

/**
 * [setup initial function call the setup things that we need]
 *
 * @return {[type]} [None]
 */
function setup() {
	//setup canvas
	canvasDiv = select("#canvas");
	canvas = createCanvas(hyperParmas.canvasWidth, hyperParmas.canvasHeight);
	canvasDiv.child(canvas);
	canvasDiv.style('height',(hyperParmas.canvasHeight+"px"));
	btns = select("#buttons");
	btns.style("margin-top",((hyperParmas.canvasHeight*0.92)+"px"));
	background(20);

	// calculate the origin of the canvas
	origin.x = (canvas.width)/2.0;
	origin.y = (canvas.height)/2.0;

	header = select("#headr");
	sub = select("#sub");
	header.addClass('animated bounceInDown');
	sub.addClass('animated bounceInDown');

	//setup buttons
	startBtn = document.getElementById("start");
	startBtn.addEventListener("click",startDraw);

	resetBtn = document.getElementById("reset");
	resetBtn.addEventListener("click",resetDraw);

	slider = createSlider(1,100,10);
	s = select("#slider");
	s.child(slider);

	statsDiv = select("#stats");

	BC = select("#BCvalue");
	EC = select("#ECvalue");
	BA = select("#BAvalue");
	EA = select("#EAvalue");

}

/**
 * [drawPoints Draw points to screen based on the batman check]
 *
 * @param  {[type]} speed [Speed of drawinf]
 *
 * @return {[type]}       [None]
 */
function drawPoints(speed) {
	for(var i=0; i<speed; i++){
		dot.x = random(hyperParmas.canvasWidth);
		dot.y = random(hyperParmas.canvasHeight);
		if(isBatman(dot, origin, hyperParmas.batmanLogoScale)){
			batmanCounter += 1;
			ellipseCounter += 1;
			stroke("#D2175F");
			point(dot.x, dot.y);
		} else if(isEllipse(dot, origin, hyperParmas.batmanLogoEllipseSize)) { 
			ellipseCounter += 1;
			stroke("#50E3C2");
			point(dot.x, dot.y);
		} 
	}
}

/**
 * [draw Draw stuff to the screen every frame]
 *
 * @return {[type]} [None]
 */

function draw() {
	hyperParmas.speed = map(slider.value(), 1, 100, 1, 1000);
	if(options.start) {
		drawPoints(hyperParmas.speed);
	} else if(options.reset) {
		background(20);
	} 	
	ellipsearea = ellipseArea(hyperParmas.batmanLogoEllipseSize);
	if(batmanCounter == 0 && ellipseCounter == 0){
		batmanArea = 0;
	} else {
		batmanArea = approximateArea(batmanCounter, ellipseCounter, ellipsearea);
	}
	/*statsDiv.html("Batman Logo Points Count: " + batmanCounter + "<br />" +
		"Ellipse Points Count: " + ellipseCounter + "<br />"
		+ "Ellipse Area: " + ellipsearea + "<br />" + "Batman Logo Area: " + batmanArea);*/
	BC.html(batmanCounter);
	EC.html(ellipseCounter);
	EA.html(ellipsearea);
	BA.html(batmanArea);
}

/**
 * [startDraw Start button Bind function - starts the drawing]
 *
 * @return {[type]} [None]
 */
function startDraw() {
	options.start = true;
	options.reset = false;
	startBtn.innerHTML = "PAUSE";
	/*
	IF YOU ARE WONDERING WHY HAVEN'T I USED p5 select OBJECT, HERE IS THE ANSWER
	=> startBtn was a p5 select object [select("#start")]
	but the problem was, everytime after reset call, the pause/resume mechanism just wouldn't work.
	The strange thing was that whenever I clicked on the start button(when its in the state of pause/resume),
	it started to call the new event attached function multiple times instead of calling it once,
	resulting in rendering the pause/resume	button useless every odd cycles,
	I tried using p5_events + generic removeEventListen function
	p5Element.elt.removeEventListener(ev, p5Element._events[ev]); , no luck either, so 
	instead, I went with the generic removeEventListener function, and changed the button object from p5 select to the
	standard document.getElementByID(). 
	 */
	startBtn.removeEventListener("click", startDraw);
	startBtn.addEventListener("click",togglePauseResume);	
}

/**
 * [togglePauseResume Toggle function - used in the pause/resume mechanism]
 *
 * @return {[type]} [None]
 */
function togglePauseResume() {
	if(options.start){
		startBtn.innerHTML = "RESUME";
		options.start = false;
	} else {
		startBtn.innerHTML = "PAUSE";
		options.start = true;
	}
}

/**
 * [resetDraw Reset button bind function - resets the canvas]
 *
 * @return {[type]} [None]
 */
function resetDraw() {
	options.start = false;
	options.reset = true;
	startBtn.innerHTML = "START";
	startBtn.removeEventListener("click", togglePauseResume);
	startBtn.addEventListener("click", startDraw);
	batmanCounter = 0, ellipseCounter = 0;
}
