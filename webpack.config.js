module.exports = {
  entry: './index.js',
  output: {
    path: '.',
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
