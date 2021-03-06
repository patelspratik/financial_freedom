module.exports = function(grunt) {
	grunt.initConfig({
	  	sass: {     
			dist: {   
		    	files: {
		      	'./css/main.css': './compass/stylesheets/main.scss'
		      }
		    }
	    },

	  	watch: {
	  	  options: {
		      livereload: true,
		  },
		  styles: {
		    files: ['./compass/sass/*'],
		    tasks: ['sass']
		  },
		  html: {
		  	files: ['./index.php']
		  },
		  scripts: {
		  	files: ['./javascript/*', './Gruntfile.js']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass', 'watch']);
};