const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		// path: path.join(__dirname, 'dist'),
		library: {
			type: "umd",
			name: "ReactParseHTMLString",
		},
		filename: 'react-parse-htmlstring.js'
	},
	externals: {
		'react': 'React'
	},
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
			'.json',
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
