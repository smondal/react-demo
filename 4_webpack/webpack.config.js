module.exports = {
    context: __dirname + "/src",
    entry: "./index",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/static/"
    },
    module: {
    loaders: [
      {
        test: /\.js$/,
        loader: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}