const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry: {
    main: __dirname + '/src/index.js',
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/lib-web',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    extensions: ['.js']
  }
}
module.exports = config

