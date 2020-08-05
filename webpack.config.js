var webpack = require('webpack');
var path = require('path');
const { DuplicatesPlugin } = require("inspectpack/plugin");
//externals: ['react-component-lazy-load', 'react-router-dom'],
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'sourcemap',
  mode: "production",
  module: {
    rules: [
      {
        test: /.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-react", '@babel/preset-env'],
          plugins: ['@babel/plugin-syntax-dynamic-import']
        }
      }
    ]
  },
  plugins: [
    new DuplicatesPlugin({
      // Emit compilation warning or error? (Default: `false`)
      emitErrors: false,
      // Handle all messages with handler function (`(report: string)`)
      // Overrides `emitErrors` output.
      emitHandler: undefined,
      // List of packages that can be ignored. (Default: `[]`)
      // - If a string, then a prefix match of `{$name}/` for each module.
      // - If a regex, then `.test(pattern)` which means you should add slashes
      //   where appropriate.
      //
      // **Note**: Uses posix paths for all matching (e.g., on windows `/` not `\`).
      ignoredPackages: undefined,
      // Display full duplicates information? (Default: `false`)
      verbose: true
    })]

}
