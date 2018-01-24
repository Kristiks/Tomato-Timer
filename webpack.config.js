const Path = require( 'path' );

module.exports = {
	entry: {
		main: Path.join( __dirname, 'scripts', 'index.ts' ),
	},
	output: {
		path: Path.join( __dirname, 'scripts', 'build' ),
		filename: '[name].js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: Path.join( __dirname, 'scripts', 'tsconfig.json' ),
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
};
