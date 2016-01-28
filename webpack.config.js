var webpack = require('webpack');

module.exports = {
	entry: {
		entry: './js/app',
	},

	output: {
		path: __dirname + "/dist",
		filename: 'bundle.js'
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		})
	]
};
