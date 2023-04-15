const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /dist\/\w+\.js/i,
				minify: TerserPlugin.uglifyJsMinify,
				terserOptions: {
					format: {
						comments: false,
					},
					mangle: {
						toplevel: false,
						keep_fargs: true,
						keep_quoted: true,
						reserved: [ 'require', 'import', 'export', 'parseHTMLString', 'ParseHTML' ]
					},
				},
				extractComments: false,
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
