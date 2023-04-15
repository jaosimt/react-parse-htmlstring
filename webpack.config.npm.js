const path = require('path');
const webpack = require('webpack');
let config = require('./webpack.config.base');
config = Object.create(config);

config.mode = 'production';
config.entry = {
	index: path.join(__dirname, 'src', 'index.js'),
	ParseHTML: path.join(__dirname, 'src', 'ParseHTML.js'),
	processor: path.join(__dirname, 'src', 'processor.js'),
};
config.output = {
	path: path.resolve(__dirname, 'dist'),
	filename: '[name].js'
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