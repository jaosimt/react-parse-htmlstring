const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: "all",
			}),
		],
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx',
			'.json'
		],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src'),
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
};
