module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'stylus:dev',
		'sync:dev',
		'webpack:dev'
	]);
};
