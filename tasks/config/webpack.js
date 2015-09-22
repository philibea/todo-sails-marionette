var path = require('path');
var webpack = require('webpack');

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-webpack");
  grunt.config.set('webpack', {
    dev: {
      entry: path.join(__dirname, "../../assets/js/init.js"),
      output: {
        path: ".tmp/public/js/",
        filename: "app.js"
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            include: [
              path.resolve(__dirname, "../../assets/js")
            ]
          }
        ]
      },
      resolve: {
        root: path.resolve(__dirname, "../../assets/components/"),
        alias: {
          jquery: 'jquery',
          Backbone: 'backbone',
          underscore: 'underscore',
          Marionette: 'backbone.marionette',
          Radio: 'backbone.radio'
        }
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: 'jquery',
          Backbone: 'Backbone',
          underscore: 'underscore',
          _: 'underscore',
          Marionette: 'Marionette'
        })
      ]
    }
  });
};
