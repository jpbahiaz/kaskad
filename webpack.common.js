const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'kaskad.js',
		library: 'kaskad',
    libraryTarget: 'umd',
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /\/node_modules\//,
			use: {
					loader: 'babel-loader'
			}
		}]
	},
	// optimization: {
  //   minimize: false
  // }
};
