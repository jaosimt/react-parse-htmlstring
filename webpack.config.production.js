const webpack = require('webpack');
let config = require('./webpack.config.base');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
config = Object.create(config);

config.mode = 'production';
config.entry = path.join(__dirname, 'src', 'index');
config.output = {
	library: {
		type: 'commonjs-static',
		// name: 'ReactParseHTMLString'
	},
	clean: true,
	path: path.resolve(__dirname, 'lib'),
	filename: 'react-parse-htmlstring.js'
};
config.externals = {
	'react': 'React'
};

config.plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('production')
	}),
	new CopyPlugin({
		patterns: [
			{ from: path.resolve(__dirname, 'src'), to: path.resolve(__dirname, 'dist') }
		],
	}),
];

module.exports = config;