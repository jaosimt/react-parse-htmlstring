const webpack = require('webpack');
let config = require('./webpack.config.base');
config = Object.create(config);

config.plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify('development')
	})
];

module.exports = config;