const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	hot: true,
	historyApiFallback: true,
	stats: {
		colors: true
	}
}).listen(3000, 'localhost', function (err, result) {
	if (err) {
		console.log(err);
	}
	
	console.log('Listening at localhost:3000');
});