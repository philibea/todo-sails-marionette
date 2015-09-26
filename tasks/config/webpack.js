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
        root: [path.join(__dirname, "../../assets/components")]
      },
      plugins: [
        new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        })
      ]
    }
  });
};
