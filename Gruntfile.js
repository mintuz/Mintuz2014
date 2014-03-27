/**
 * 
 * FILE: Grunt configuration - based on Jonathan Christopher grunt config: http://bit.ly/X6BFVE
 * 
 * AUTHOR: Forepoint (http://www.forepoint.co.uk)
 * DATE: 2014
 * VERSION 3.0
 *
 * To run the grunt in production mode use the following command: `grunt --mode=prod`
 * or to create the icons run the following command: `grunt --mode=icons`
 * 
 */

module.exports = function( grunt ) {

  var mode = grunt.option( 'mode' ) || 'dev';

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  if ( mode == 'prod' ) {
    
    grunt.log.subhead( 'Running Grunt in `Production` mode' );
    
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

  } else if( mode == 'icons' ) {

    grunt.log.subhead( 'Running Grunt in `Icon` mode' );

    grunt.loadNpmTasks('grunt-webfont');

  } else {
    
    grunt.log.subhead( 'Running Grunt in `Development` mode' );

  }

	grunt.initConfig({

    // compass
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          outputStyle: ( mode == 'dev' ) ? 'expanded' : 'compressed',
          force: true
        }
      }
    },

    // concatenation and minification all in one
    uglify: {
      dist: {
        files: {
          'assets/js/main.js': [ 'assets/js/main.js' ]
        }
      },
    },
          
    // concatenation
  	concat: {
  		options: {
  			separator: ''
  		},
  		dist: {
  			src: [
  				'assets/js/plugins.js',
  				'assets/js/classes/*.js', 
  				'assets/js/main.dev.js'
  			],
  			dest: 'assets/js/main.js'
  		}
  	},
  		
  	// build icon font
  	webfont: {
  		icons: {
  			src: 'assets/icons/*.svg',
  			dest: 'assets/css/fonts',
  			destCss: 'assets/sass/site/type/',
  			options: {
  				font: 'icons',
  				hashes: false,
  				htmlDemo: false,
  				stylesheet: 'scss',
  				styles: 'font,icon',
  				template: 'assets/icons/icon-template.css',
  				relativeFontPath: 'fonts/'
  			}
  		}
  	},
  		
    // Imagemin
    imagemin: {
      files: {
        expand: true, 
        cwd: 'assets/img/',
        src: [ '**/*.{png,gif,jpg}' ],
        dest: 'assets/img/'
      }
    },

    // SVG Min
    svgmin: {
      options: {
        plugins: [{
          removeViewBox: false
        }]
      },
      dist: {
        files: [{
          expand: true, 
          cwd: 'assets/img/',
          src: [ '**/*.svg' ],
          dest: 'assets/img/'
        }]
      }
    },

    // watch our project for changes
    watch: {
      compass: {
        files: [
          'assets/sass/*.scss',
          'assets/sass/**/*.scss'
        ],
        tasks: [ 'compass' ]
      },
      js: {
        files: [
          'assets/js/plugins.js',
          'assets/js/classes/*.js', 
          'assets/js/main.dev.js'
        ],
        tasks: ['concat']
      }
    }
  
  });

  // register task default task
  grunt.registerTask( 'default', function() {

    // some tasks we only want to run in production mode
    if ( mode == 'prod' ) {
      
      grunt.task.run([ 
        'compass', 
        'concat', 
        'uglify', 
        'imagemin',
        'svgmin' 
      ]);

    } else if( mode == 'icons' ) {

      grunt.task.run( [ 'webfont' ] );

    } else {

       grunt.task.run([ 
        'compass', 
        'concat', 
        'watch' 
      ]);

    }

  });
    
};