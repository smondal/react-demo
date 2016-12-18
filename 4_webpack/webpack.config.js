module.exports = {
    context: __dirname + "/src",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
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