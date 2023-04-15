const path = require('path');

module.exports = {
	optimization: {
		minimize: false,
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
