module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: __dirname,
    alias: {
      Inspirator: 'src/components/Inspirator.jsx',
      InspiratorMessage: 'src/components/InspiratorMessage.jsx',
      InspiratorForm: 'src/components/InspiratorForm.jsx'
    }
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
