'use strict';

const path = require('path');

module.exports = {
	entry : path.resolve(__dirname + '/src/index.js'),

	output : {
		filename : 'tawk-messenger-vue.js',
		libraryTarget : 'umd',
		path : path.resolve(__dirname, 'dist')
	},

	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : 'babel-loader'
			}
		]
	}
};
