var path = require('path')
module.exports = {
    // context: __dirname + "/src",
    entry: "./src/index",
    output: {
        path: __dirname,
        filename: "bundle.js",
        // publicPath: "/assets/"
    },
    module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        include:  path.join(__dirname, 'src'),
      },
      { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!stylus-loader'
      },
    ]
  }
}

// var path = require('path');
// var webpack = require('webpack');

// module.exports = {
//   devtool: 'source-map',
//   entry: [
//     'webpack-hot-middleware/client',
//     './src/index'
//   ],
//   output: {
//     path: __dirname,
//     filename: 'bundle.js',
//     // publicPath: '/static/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],
//   module: {
//     loaders: [
//     // js
//     {
//       test: /\.js$/,
//       loaders: ['babel-loader'],
//       include: path.join(__dirname, 'src')
//     },
//     // CSS
//     { 
//       test: /\.styl$/, 
//       include: path.join(__dirname, 'src'),
//       loader: 'style-loader!css-loader!stylus-loader'
//     }
//     ]
//   }
// };
