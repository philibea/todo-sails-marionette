var path = require('path');

module.exports = function (grunt) {

  grunt.config.set('jade', {
      dev: {
        options: {
          namespace: false
        },
        files: [{
          cwd: "views/templates",
          src: ["*.jade"],
          dest: 'assets/templates',
          expand: true,
          ext: ".html"
        }]
      }
    }
  );

  grunt.loadNpmTasks('grunt-contrib-jade');
};
