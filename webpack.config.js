module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  resolve: {
    extensions: ['', 'js', 'jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
