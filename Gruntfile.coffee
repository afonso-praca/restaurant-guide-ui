module.exports = (grunt) ->
	pkg = grunt.file.readJSON('package.json')

	# Project configuration.
	grunt.initConfig
		relativePath: pkg.paths[0].slice(1) # Removes first slash

	# Tasks
		clean:
			main: ['build', 'tmp-deploy']

		htmlSnapshot:
			prod:
				options:
					snapshotPath: 'build/snapshots/'
					sitePath: 'http://localhost/'
					msWaitForPages: 1000,
					fileNamePrefix: 'sp',
					bodyAttr: 'data-prerendered',
					urls: ['#!/restaurantes/52ec25085ee1f3ba0db0e867', '#!/restaurantes']

		copy:
			main:
				files: [
					expand: true
					cwd: 'src/'
					src: ['**', '!coffee/**', '!style/**']
					dest: 'build/<%= relativePath %>/'
				,
					# Serve index.html where janus expects it
					src: ['src/index.html']
					dest: 'build/<%= relativePath %>/<%= relativePath %>/index.html'
				]

		coffee:
			main:
				files: [
					expand: true
					cwd: 'src/coffee'
					src: ['**/*.coffee']
					dest: 'build/<%= relativePath %>/js/'
					ext: '.js'
				]

		less:
			main:
				files: [
					expand: true
					cwd: 'src/styles'
					src: ['style.less']
					dest: 'build/<%= relativePath %>/styles/'
					ext: '.css'
				]

		uglify:
			options:
				mangle: false

		ngtemplates:
			main:
				cwd: 'src/'
				src: 'views/**/*.html',
				dest: 'build/<%= relativePath %>/js/templates.js'
				options:
					module: 'app'
					htmlmin:  collapseWhitespace: true, collapseBooleanAttributes: true

		useminPrepare:
			html: 'build/<%= relativePath %>/index.html'
			options:
				dest: 'build/'
				root: 'build/'

		usemin:
			html: ['build/<%= relativePath %>/index.html', 'build/<%= relativePath %>/<%= relativePath %>/index.html']

		karma:
			options:
				configFile: 'karma.conf.coffee'
			unit:
				background: true
			single:
				singleRun: true

		connect:
			server:
				options:
					livereload: true
					hostname: "localhost"
					port: 80
					middleware: (connect, options) ->
						proxy = require("grunt-connect-proxy/lib/utils").proxyRequest
						[proxy, connect.static('./build/')]

		watch:
			options:
				livereload: true
				spawn: false
			js:
				files: ['src/scripts/**/*.js']
				tasks: ['coffee', 'copy']
			less:
				files: ['src/styles/**/*.less']
				tasks: ['less']
			ngtemplates:
				files: ['src/views/**/*.html']
				tasks: ['ngtemplates', 'copy']
			main:
				files: ['src/i18n/**/*.json', 'src/index.html']
				tasks: ['copy']
			test:
				files: ['src/coffee/**/*.coffee', 'spec/**/*.coffee']
				tasks: ['karma:unit:run']

	grunt.loadNpmTasks name for name of pkg.dependencies when name[0..5] is 'grunt-'

	grunt.registerTask 'default', ['clean', 'copy', 'coffee', 'less', 'ngtemplates', 'server', 'watch']
	grunt.registerTask 'tdd', ['clean', 'copy', 'coffee', 'less', 'ngtemplates', 'karma:unit', 'server', 'watch']
	grunt.registerTask 'min', ['useminPrepare', 'concat', 'uglify', 'usemin'] # minifies files
	grunt.registerTask 'dist', ['clean', 'copy', 'coffee', 'less', 'ngtemplates', 'htmlSnapshot'] # Dist - minifies files
	grunt.registerTask 'devmin', ['dist', 'configureProxies:server', 'connect:server:keepalive'] # Minifies files and serve
	grunt.registerTask 'test', ['karma:single']
	grunt.registerTask 'server', ['configureProxies:server', 'connect']
