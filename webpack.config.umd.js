const webpack = require('webpack');
let config = require('./webpack.config.base');
const path = require('path');
config = Object.create(config);

config.mode = 'production';
config.output = {
	library: {
		type: 'umd',
		name: 'ReactParseHTMLString'
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
	})
];

module.exports = config;