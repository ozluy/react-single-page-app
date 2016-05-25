var path = require('path');
var webpack = require('webpack');
module.exports =
{
	entry: './src/main.js',
	output: {
		path: './src',
		filename: 'bundle.js'
	},
	output: { path: __dirname, filename: 'bundle.js' },
	devServer: {
		inline: true,
		contentBase: './src',
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: [ 'react','es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};