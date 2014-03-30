/*
 * Avoid `console` errors in browsers that lack a console.
 */
if(!(window.console&&console.log)){(function(){var e=function(){};var t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"];var n=t.length;var r=window.console={};while(n--){r[t[n]]=e}})()}

/*
 * Spoofs HTML5 Placeholders
 * Author: Dan Bentley (github.com/danbentley)
 */
(function($){if("placeholder"in document.createElement("input"))return;$(document).ready(function(){$(':input[placeholder]').each(function(){setupPlaceholder($(this));});$('form').submit(function(e){clearPlaceholdersBeforeSubmit($(this));});});function setupPlaceholder(input){var placeholderText=input.attr('placeholder');if(input.val()==='')input.val(placeholderText);input.bind({focus:function(e){if(input.val()===placeholderText)input.val('');},blur:function(e){if(input.val()==='')input.val(placeholderText);}});}
function clearPlaceholdersBeforeSubmit(form){form.find(':input[placeholder]').each(function(){var el=$(this);if(el.val()===el.attr('placeholder'))el.val('');});}})(jQuery);

/*
 * SVGeezy
 * Author: Ben Howdle (github.com/benhowdle89)
 */
var svgeezy=function(){return{init:function(a,b){this.avoid=a||!1,this.filetype=b||"png",this.svgSupport=this.supportsSvg(),this.svgSupport||(this.images=document.getElementsByTagName("img"),this.imgL=this.images.length,this.fallbacks())},fallbacks:function(){for(;this.imgL--;)if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var a=this.images[this.imgL].getAttribute("src");if(null===a)continue;if("svg"==this.getFileExt(a)){var b=a.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",b)}}},getFileExt:function(a){var b=a.split(".").pop();return-1!==b.indexOf("?")&&(b=b.split("?")[0]),b},hasClass:function(a,b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();
/**
 * 
 * FILE: Class Name
 * 
 * AUTHOR: Forepoint (http://www.forepoint.co.uk)
 * DATE: 2013
 * VERSION 1.1
 * 
 */
 
/**
 *
 * Within the main.js file we need to implement
 * this class using the following code:
 *
 * if( typeof {{XXX}}ClassName != 'undefined' ) {
	
       {{XXX}}ClassName.init();
	
   }
 *
 *
 */
var AMBFrontend = {
	
	init : function() {
		
		AMBFrontend.frontpage_charts();
		
	},
	frontpage_charts : function() {
		
	}
		
};/**
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