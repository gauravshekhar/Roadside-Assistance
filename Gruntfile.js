module.exports = function(grunt)
{
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	

	grunt.registerTask('launch', ['default', 'connect:server', 'watch']);
	grunt.registerTask('default', ['jshint', 'html2js', 'concat', 'htmlmin', 'stylus', 'cssmin', 'clean', 'copy']);


	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),





		// grunt-contrib-copy
		// https://github.com/gruntjs/grunt-contrib-copy
		// Transfers our images over from development folder to public
		copy:
		{
			images:
			{
				files:
				[
					{
						expand: true,
						cwd: 'development/images/', 
						src: ['**/*.{png,jpg}'], 
						dest:'public/images/' 
					}
				]
			}
		},





		// grunt-contrib-clean
		// https://github.com/gruntjs/grunt-contrib-clean
		// Removes the dummy stylus.css file within the public directory
		clean: 
		[
			'public/css/stylus.css'
		],





		// grunt-contrib-cssmin
		// https://github.com/gruntjs/grunt-contrib-cssmin
		// Compiles all CSS with the compiled Stylus files
		cssmin:
		{
			combine:
			{
				files:
				{
					'public/css/<%= pkg.name %>.css': 
					[
						'public/css/stylus.css',
						'vendor/bootstrap/dist/css/bootstrap.min.css'
					]
				}
			}
		},





		// grunt-contrib-stylus
		// https://github.com/gruntjs/grunt-contrib-stylus
		// Compile Stylus into public/css/stylus.css
		stylus:
		{
			compile:
			{
				files:
				{
					'public/css/stylus.css':
					[
						'development/**/*.styl'						
					]
				}
			}
		},





		// grunt-contrib-htmlmin
		// https://github.com/gruntjs/grunt-contrib-htmlmin/blob/master/package.json
		// Grunt plugin for html minifiction into public directory
		htmlmin:
		{
			dist: 
			{
				options:
				{
					removeComments: true,
					collapseWhitespace: true
				},
				files:
				{
					'public/index.html': 'development/base/index.html'
				}
			}
		},






		// grunt-html-build
		// https://github.com/spatools/grunt-html-build/blob/master/package.json
		// Build index.html file for the public folder
		htmlbuild:
		{
			src: 'development/base/*.html',
			dest: 'dev'
		},






		// grunt-contrib-connect
		// https://github.com/gruntjs/grunt-contrib-connect
		// Start a webserver for the project to run on locally
		connect:
		{
			server:
			{
				options:
				{
					base:'public',
					port: 3333,
					protocol: 'https'
				}
			}
		},






		// grunt-contrib-concat
		// https://github.com/gruntjs/grunt-contrib-concat
		// Concatenates all of our script files and places into our public folder
		concat:
		{
			options:
			{
				banner:'// By: Christopher Carrington\n\n'
			},
			dist:
			{
				dest: 'public/js/<%= pkg.name %>.js',
				src: 
				[
					'vendor/jquery/dist/jquery.min.js',
					'vendor/jquery-ui/ui/minified/jquery.ui.core.min.js',
					'vendor/jquery-ui/ui/minified/jquery.ui.widget.min.js',
					'vendor/jquery-ui/ui/minified/jquery.ui.mouse.min.js',
					'vendor/jquery-ui/ui/minified/jquery.ui.sortable.min.js',
					'vendor/jquery-ellipsis/jquery-ellipsis.min.js',
					'vendor/angular/angular.js',
					'vendor/angular-ui-router/release/angular-ui-router.js',
					'vendor/bootstrap/dist/js/bootstrap.min.js',
					'development/base/templates.js',
					'development/base/common.js',
					'development/base/cache.js',
					'development/controllers/**/*.js'
				]
			}
		},


		



		// grunt-contrib-jshint
		// https://github.com/gruntjs/grunt-contrib-jshint
		// Lints Javascript based on the options listed below
		jshint: 
		{
			files: ['development/**/*.js']
		},






		// grunt-contrib-watch
		// https://github.com/gruntjs/grunt-contrib-watch
		// Autocompiles the application when a file is saved
		watch:
		{
			html:
			{
				files: 
				[
					'development/base/index.html',
					'development/controllers/**/*.tpl.html'
				],
				tasks: ['htmlmin', 'html2js']
			},
			styles:
			{
				files: ['development/**/*.styl'],
				tasks: ['stylus', 'cssmin', 'clean']
			},
			scripts:
			{
				files: ['development/**/*.js'],
				tasks: ['jshint', 'concat']
			}
		},






		// grunt-html2js
		// https://github.com/karlgoldstein/grunt-html2js
		// Converts a group of templates to JavaScript for Angular. 
		html2js: 
		{
			options: {},
			main: 
			{
				src: ['development/controllers/**/*.tpl.html'],
				dest: 'development/base/templates.js'
			},
		}
	});
};

