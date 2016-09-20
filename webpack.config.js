module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: __dirname + '/client/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};

