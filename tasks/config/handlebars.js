module.exports = function(grunt) {

	grunt.config.set('handlebars', {
		dev: {
      options: {
        namespace: 'Templates',
        commonjs: true,
        processName: function(filePath) {
          var pieces = filePath.split("/"),
            fileName = pieces[pieces.length - 1];

          return fileName.slice(0, fileName.lastIndexOf('.'))
        }
      },

			files: {
				'assets/js/jst.js': require('../pipeline').templateFilesToInject
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-handlebars');
};
