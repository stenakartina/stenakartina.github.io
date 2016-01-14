module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// concat task
		concat:{
			options:{
				separator: ";\n"
			},
			plugins:{
				src: ["src/js/plugin/*.js"],
				dest: "js/plugins.js"
			},
			main:{
				src: ["src/js/definition.js", "src/js/part/*.js", "src/js/main.js"],
				dest: "js/main.js"
			}
		},
		jshint:{
			all:["src/js/definition.js", "src/js/part/*.js", "src/js/main.js"]
		},
		// uglify task
		uglify:{
			main:{
				files: {
					"js/main.min.js": ['js/main.js']
				}
			},
			plugins:{
				options: {
					preserveComments: 'all'
				},
				files: {
					
				}
			}
		},
		// less builder
		less: {
			live: {
				files: {
					"css/style.css": "src/less/style.less"
				}
			}
		},
		csso:{
			dist: {
				files: {
					'css/style.min.css': ['css/style.css']
				}
			}
		},
		// jade task
		jade: {
			live: {
				options: {
					pretty: false
				},
				files: {
					"404.html": ["src/jade/page/404.jade"],
					"index.html": ["src/jade/page/index.jade"]
				}
			},
			build:{
				options: {
					pretty: false
				},
				files: {
					"404.html": ["src/jade/page/404.jade"],
					"index.html": ["src/jade/page/index.jade"]
				}
			}
		},
		// watch task
		watch:{
			options:{
				livereload: true
			},
			less:{
				files: ['src/less/**'],
				tasks: ['less:live'],
				options: {
					livereload: true
				}
			},
			css:{
				files: ['css/style.css'],
				tasks: ['csso']
			},
			scripts:{
				files: ['src/js/**', 'src/js/part/**', 'dev/js/plugin-to-min/**'],
				tasks: ['jshint', 'uglify:plugins', 'concat', 'uglify:main']
			},
			jade:{
				files: ['src/jade/**'],
				tasks: ['jade:live']
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-csso');

	// Default task(s).
	grunt.registerTask('default',['watch']);
	grunt.registerTask('scripts', ['uglify:plugins', 'concat', 'uglify:main']);
	grunt.registerTask('build',[ 'uglify:plugins','concat', 'uglify:main', 'less:build','jade:build']);
};