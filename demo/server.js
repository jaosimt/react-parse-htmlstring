const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 3000;

const server = new WebpackDevServer({
	compress: false,
	port: port,
	client: {
		overlay: true,
	}
}, webpack(config));

(async () => {
	await server.start();
	console.log(`Dev server is listening on port ${port}`);
})();

// .listen(3000, 'localhost', function (err, result) {
// 	if (err) {
// 		console.log(err);
// 	}
//	
// 	console.log('Listening at localhost:3000');
// });