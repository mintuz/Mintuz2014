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
		
		var ctx = $( "#gaming-chart" ).get( 0 ).getContext( "2d" );

		new Chart(ctx).Radar({
			
			labels : [ "","Call Of Duty","Battlefield","Guild Wars 2","Minecraft","Diablo 3" ],
			datasets : [
				{
					fillColor : "rgba(56,64,71,0.5)",
					strokeColor : "rgba(43,49,54,0.5)",
					data : [1,100,60,70,90,40]
				}
			]

		});



		var ctx = $( "#dev-chart" ).get( 0 ).getContext( "2d" );

		new Chart(ctx).Radar({
			
			labels : [ "Frontend Web","Backend Web","Wordpress","Laravel","Objective C" ],
			datasets : [
				{
					fillColor : "rgba(83,187,180,0.5)",
					strokeColor : "rgba(53,135,130,0.5)",
					data : [100,70,80,40,60,1]
				}
			]

		});


	}
		
};