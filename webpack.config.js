var path = require('path'); 
module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}