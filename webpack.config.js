const path = require('path');

module.exports = {
	entry: {
		admin: path.resolve(
			__dirname,
			'src/index.js'
		)
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['js', 'jsx'],
		alias: {
			'@Portfolio': path.resolve(__dirname, 'src/'),
		}
	}
};
