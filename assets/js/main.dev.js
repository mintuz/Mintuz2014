/**
 * 
 * FILE: Main JS
 * 
 * AUTHOR: Forepoint (http://www.forepoint.co.uk)
 * DATE: 2013
 * VERSION 1.1
 * 
 */

$(function() {

/*------------------------------------*\
	$INITIALISE
\*------------------------------------*/
	
	// cache <body> element
	$.Body = $( 'body' );
	
	// cache <window> element
	$.Window = $( window );
	
	// SVGeezy support
	svgeezy.init( 'nocheck', 'png' );
	
	// breakpoints
	$.bp_smallest = 320,
	$.bp_small    = 480,
	$.bp_medium   = 768,
	$.bp_large    = 992,
	$.bp_largest  = 1248;
	
	// cache browser width
	$.w = $( window ).width();

/*------------------------------------*\
	$WP SANITISE
\*------------------------------------*/
	
	// remove any rogue empty <p>'s
	$( 'p:empty' ).remove();
	
	// remove any inline styles from .wp-caption
	$( '.wp-caption' ).removeAttr( 'style' );
	
	// remove fixed width because we're responsive
	$( '.wp-content img, .wp-post-image, .wp-post-thumb' ).removeAttr( 'width' ).removeAttr( 'height' );

/*------------------------------------*\
	$MAIN
\*------------------------------------*/

	if( typeof AMBFrontend != 'undefined' ) {

	  AMBFrontend.init();

	}

});