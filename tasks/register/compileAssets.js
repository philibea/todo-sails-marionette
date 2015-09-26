module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
    'jade:dev',
    'handlebars:dev',
    'stylus:dev',
    'webpack:dev',
    'copy:dev'
	]);
};
