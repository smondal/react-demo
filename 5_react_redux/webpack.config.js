module.exports = {
    context: __dirname + "/src",
    entry: "./index",
    output: {
        path: __dirname,
        filename: "bundle.js"
        // publicPath: "/assets/"
    },
    module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}