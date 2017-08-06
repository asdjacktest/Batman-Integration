/*
	[File]   : UI-jquery.js
	[Author] : r00t
 */

/**
 * [Center Buttons and Stats]
 *
 * @param  {[type]} ) {	$('#buttons').css({		'left' : '50%',		'margin-left' : -$('#buttons').width()/2	});	$('#stats').css({		'top' : '90px',		'margin-left' : $("#stats").width()/26	});} [description]
 *
 * @return {[type]}   [None]
 */


$(function() {
	$('#buttons').css({
		
		'margin-left' : $('#buttons').width()/44
	});

	$('#stats').css({
		'top' : '90px',
		'margin-left' : $("#stats").width()/26
	});

	$('#twitter').css({
		'margin-left' : -$("#twitter").width()/2 - 100
	});

	$('#github').css({
		'margin-left' : -$("#github").width()/2 + 50
	});
});