const path = require('path')

module.exports = {
  entry:{
    bundle:'./src/main.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'[name].js',
    publicPath: 'public'
  },
  watch: true,
  mode:'development',
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },{
        //@TODO: css样式
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
    }
    ]
  }
}
