const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /nodeModules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin() ]
};