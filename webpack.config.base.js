const path = require('path');

module.exports = {
	mode: 'development',
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
				enforce: 'pre',
				exclude: /nodeModules/,
				use: 'babel-loader'
			}
		]
	}
};
