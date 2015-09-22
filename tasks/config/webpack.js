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
              path.resolve(__dirname, "../../assets/js"),
              path.resolve(__dirname, "../../assets/components/backbone"),
              path.resolve(__dirname, "../../assets/components/underscore")
            ]
          }
        ]
      },
      resolveLoader: {
        modulesDirectories: [
          'node_modules', 'components'
        ]
      },
      resolve: {
        resolve: {
          extensions: ["", ".js"],
          modulesDirectories: ['node_modules', 'components'],
          alias: {
            backbone: "assets/components/backbone/backbone.js",
            underscore: "assets/components/underscore/underscore.js"
          }
        }
      },
      plugins: [
        new webpack.ResolverPlugin([
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ]),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          underscore: 'underscore',
          _: 'underscore',
          backbone: 'backbone'
        })
      ]
    }

  });
};
