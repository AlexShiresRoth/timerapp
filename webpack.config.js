const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join(__dirname, 'public/javascripts'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
      },
    module: {
        rules: [
        {
            test:/\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.(jpe?g|png|gif|mp3)$/i,
            loader: ['file-loader']
        }]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      },

}