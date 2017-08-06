 /*                                                                                                   
                                            `         `                                             
                             ``             /o`      -y`            ``                              
                        `.:+ss-`            s[4]    [6]-            `+yo/-.`                        
                    `-+shmmmm:              hmmys[5]hmm/              smmmdyo/.`                    
                `./sdmmmmmmmd              `mmmmmmmmmmms              :mmmmmmmmho:`                 
              .+ymmmmm[1]mmmm-             [3]mmmmmmm[7]              ommm[9]mmmmmds:`              
           `:smmmmmmmmmmmmmmmh.            smmmmmmmmmmmm-            /mmmmmmmmmmmmmmmd+.            
          -ymmmmmmmmmmmmmmmmm[2]`        `-mmmmmmmmmmmmmy`        `[8]mmmmmmmmmmmmmmmmmm+`          
        `+mmmmmmmmmmmmmmmmmmmmmmdy+/::/+oymmmmmmmmmmmmmmmdso//:/+ohmmmmmmmmmmmmmmmmmmmmmmd-         
        smmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm:        
       /mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmd`       
       ymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm:       
       ymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm:       
       +mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm`       
       `dmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm+        
        -dmmmmmmmmmmmmmmmmdmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmms`        
         .ymmm[10]mmmmh+-.``./sdmmmmho/:/ohmmmmmmmmmmmmmds+::/sdmmmmho:.``.:smmmm[12]mmmm+`         
          `/hmmmmmmmmy`        `:ym+`     `-ymmm[11]mmdo.      .ydo-`        -mmmmmmmmmy-           
            `/ymmmmmms           `.         `/dmmmmmmy.         `.           `mmmmmmds-`            
              `-+ydmmm-                       .ymmmm+`                      `ommmds/.               
                 `.:oyy:                       `smm/                       `ohy+-.                  
                     `..                        `s:                        `.`                      
                                                 `                                           
	[File]   : batman.js
	[Author] : r00t

	[+] Math StackExchange : https://math.stackexchange.com/questions/54506/is-this-batman-equation-for-real
                                                                                                    
*/


/**
 * [isBatman Checks if the point(x,y) exists inside the Bat symbol]
 *
 * @param  {[type]}  dot    [point object]
 * @param  {[type]}  origin [origin object]
 * @param  {[type]}  scale  [scale of figure]
 * 
 * @return {Boolean} [Returns TRUE if point(x,y) exists inside the Bat symbol, else returns FALSE]
 */
function isBatman(dot, origin, scale) {
	var posX = (dot.x - origin.x) / scale;
	var posY = (dot.y - origin.y) / scale;
	var tempX, tempY;

	// Upper Half
	if(posY < 0) {
		/* 
		Left Upper Wing
		===============
		Requisites   : posX <= -3 [Elliptical arc from -3(x-axis) to beyond in negative x-axis]
		Equation     : x = -7 * sqrt(1-(y^2)/9.0) 
		Figure index : [1] (ascii art)
		*/
		if(posX <= -3) {
			tempX = (-7 * Math.sqrt(1 - ((posY * posY)/9.0)));
			if(posX >= tempX) {
				return true;
			} else {
				return false;
			}
		}

		/*
		Left Shoulder
		=============
		Requisites   : posX > -3 and posX <= -1 [A small steep(y-axis) curve from -3(x-axis) to -1(x-axis)]
		Equation     : y = -(((6*sqrt(10))/7) + (1.5-0.5*-|x|)) - ((6*sqrt(10))/14) * (sqrt(4-(-|x|-1)^2))
		Figure index : [2] (ascii art)
 		 */
 		if((posX > -3) && (posX <= -1))	{
 			tempX = -posX;
 			tempY = -(2.710523708715754 + (1.5 - (0.5 * tempX))) + 
 			1.355261854357877 * Math.sqrt(4.0-(Math.abs(tempX)-1)*(Math.abs(tempX)-1));
 			if(posY > tempY) {
 				return true;
 			} else {
 				return false;
 			}
 		}

 		/*
 		Exterior Left Ear
 		=================
 		Requisites   : posX > -1 and posX <= -0.75 [Slant straight line]
 		Equation     : y = 9.0 + 8 * |x|
 		Figure index : [3] (ascii art)
 		 */
 		if((posX > -1) && (posX <= -0.75)) {
 			tempY = 9.0 + 8 * posX;
 			if(posY > -tempY) {
 				return true;
 			} else {
 				return false;
 			}
 		}

 		/*
 		Interior Left Ear
 		=================
 		Requisites   : posX > -0.75 and posX <= -0.5 [Slant straight line]
 		Equation     : y = -3 * |x| + 0.75
 		Figure index : [4] (ascii art)
 		 */
 		if((posX > -0.75) && (posX <= -0.5)) {
 			tempY = -3 * posX + 0.75;
 			if(posY > -tempY) {
 				return true;
 			} else {
 				return false;
 			}
 		}

 		/*
 		Top of the Head
 		===============
 		Requisites   : posX > -0.5 and posX <= 0.5 [Straight line]
 		Equation     : y = 2.25
 		Figure index : [5] (ascii art)
 		 */
 		if((posX > -0.5) && (posX <= 0.5)) {
 			tempY = 2.25;
 			if(posY > -tempY) {
 				return true;
 			} else {
 				return false;
 			}
 		}

 		/*
 		Interior Right Ear
 		==================
 		Requisites   : posX > 0.5 && posX <= 0.75 [Slant straight line]
 		Equation     : y = 3 * |x| + 0.75
 		Figure index : [6] (ascii art)
 		 */
 		if((posX > 0.5) && posX <= 0.75) {
 			tempY = 3 * posX + 0.75;
 			if(posY > -tempY) {
 				return true;
 			} else {
 				return false;
 			}
 		}

 		/*
 		Exterior Right Ear
 		==================
 		Requisites   : posX > 0.75 && posX <= 1 [Slant straight line]
 		Equation     : y = y = 9.0 - 8 * |x|
 		Figure index : [7] (ascii art)
 		 */
 		if (posX > 0.75 && posX <= 1) {
			tempY = 9.0 - 8 * posX;
			if (posY > -tempY) {
				return true;
			} else {
				return false;
			}
		}

		/*
 		Right Shoulder
 		==================
 		Requisites   : posX <= 3 and posX > 1 [A small steep(y-axis) curve from 3(x-axis) to 1(x-axis)]
 		Equation     : y = -(((6*sqrt(10))/7) + (1.5-0.5*|x|)) - ((6*sqrt(10))/14) * (sqrt(4-(|x|-1)^2))
 		Figure index : [8] (ascii art)
 		 */
 		 if((posX <= 3) && (posX > 1)) {
 		 	tempY = -(2.710523708715754 + (1.5 - (0.5 * posX))) 
 		 	+ 1.355261854357877 * Math.sqrt(4.0-(Math.abs(posX)-1)*(Math.abs(posX)-1));
 			if(posY > tempY) {
 				return true;
 			} else {
 				return false;
 			}
 		 }

		/* 
		Right Upper Wing
		===============
		Requisites   : posX <= 3 [Elliptical arc from 3(x-axis) to beyond in positive x-axis]
		Equation     : x = 7 * sqrt(1-(y^2)/9.0) 
		Figure index : [9] (ascii art)
		*/
		if(posX > 3) {
			tempX = (7 * Math.sqrt(1-((posY * posY)/9.0)));
			if(posX <= tempX) {
				return true;
			} else {
				return false;
			}
		}
	}

	// Lower Half
	if(posY >= 0) {
		/*
		Bottom Left Wing
		================
		Requisites   : posX <= -4.0 [Elliptical arc from -4(x-axis) to beyond in negative x-axis]
		Equation     : x = -7 * sqrt(1-(y^2)/9.0) 
		Figure index : [10] (ascii art)
		 */
		if(posX <= -4.0) {
			tempX = (-7 * Math.sqrt(1-((posY * posY)/9.0)));
			if(posX >= tempX) {
				return true;
			} else {
				return false;
			}
		}

		/*
		Bottom Wing
		===========
		Requisites   : posX > -4.0 and posX <= 4 [Bouncy curve]
		Equation     : y = (|x/2| - ((3*sqrt(33)*7)/112) * x^2-3) + (sqrt(1-(||x|-2|-1)^2))
		Figure index : [11] (ascii art)
		 */
		if((posX > -4.0) && (posX <= 4)) {
			tempY = (Math.abs(posX/2) - 0.09137221374655434 * posX * posX - 3.0) 
			+ Math.sqrt(1 - (Math.abs(Math.abs(posX)-2)-1) * (Math.abs(Math.abs(posX)-2)-1));
			tempY *= -1; ////////////////////////////////////////
			if(posY < tempY) {
				return true;
			} else {
				return false;
			}
		}

		/*
		Bottom Right Wing
		================
		Requisites   : posX <= 4.0 [Elliptical arc from 4(x-axis) to beyond in positive x-axis]
		Equation     : x = 7 * sqrt(1-(y^2)/9.0) 
		Figure index : [12] (ascii art)
		 */
		if(posX >= 4.0) {
			tempX = (7 * Math.sqrt(1-((posY * posY)/9.0)));
			if(posX <= tempX) {
				return true;
			} else {
				return false;
			}
		}
	}
	return false;
}

/**
 * [isEllipse Checks if the point(x,y) exists inside the ellipse]
 *
 * @param  {[type]}  dot    [point object]
 * @param  {[type]}  origin [origin object]
 * @param  {[type]}  scale  [scale of figure]
 *
 * @return {Boolean}        [Returns TRUE if point(x,y) exists inside the ellipse, else returns FALSE]
 */
function isEllipse(dot, origin, scale) {
	var posX = (dot.x - origin.x) / scale;
	var posY = (dot.y - origin.y) / scale;
	var tempX;

	if(posX < 0) {
		tempX = (-7 * sqrt(1-((posY * posY)/9.0)));
		if(posX >= tempX) {
			return true;
		} else {
			return false;
		}
	} else if(posX >= 0) {
		tempX = (7 * sqrt(1-((posY * posY)/9.0)));
		if(posX <= tempX) {
			return true;
		} else {
			return false;
		}
	}

}

/**
 * [ellipseArea returns area of ellipse]
 *
 * @param  {[type]} scale [scale of ellipse]
 *
 * @return {[type]}       [area of ellipse]
 */
function ellipseArea(scale) {
	// Area = πab
	return(Math.PI * 7 * 3 * scale);
}

/**
 * [approximateArea returns approx area of batman logo from the point-counts ratio]
 *
 * @param  {[type]} batmanCounter  [number of points that were drawn inside batmanlogo]
 * @param  {[type]} ellipseCounter [number of points that were drawn inside ellipse]
 * @param  {[type]} ellipseArea    [ellipse area]
 *
 * @return {[type]}                [approx area of batman logo]
 */
function approximateArea(batmanCounter, ellipseCounter, ellipseArea) {
	// Area = bc/ec * ea
	return((batmanCounter/ellipseCounter) * ellipseArea);
}