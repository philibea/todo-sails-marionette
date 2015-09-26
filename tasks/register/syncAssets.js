module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
    'jade:dev',
		'handlebars:dev',
		'stylus:dev',
		'sync:dev',
		'webpack:dev'
	]);
};
