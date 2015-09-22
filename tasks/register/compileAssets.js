module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'stylus:dev',
    'webpack:dev',
    'copy:dev'
	]);
};
