const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const webConfig = {
  entry: {
    main: __dirname + '/src/index.js'
  },
  output: {
    filename: 'index.web.js',
    path: __dirname + '/website/public',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [new UglifyJSPlugin()],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    extensions: ['.js']
  }
}

module.exports = [webConfig]
