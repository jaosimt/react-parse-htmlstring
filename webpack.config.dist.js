const path = require('path');
const webpack = require('webpack');
let config = require('./webpack.config.base');
config = Object.create(config);

config.mode = 'production';
config.experiments = {
	outputModule: true,
};
config.output = {
	library: {
		type: 'module'
	},
	clean: true,
	path: path.resolve(__dirname, 'dist'),
	filename: 'index.js'
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