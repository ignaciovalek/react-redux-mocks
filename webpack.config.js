const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {	
	mode: 'development',
	entry: {
		app: './src/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader',
					'css-loader']
			},
			{
				test: /\.(png|svg|gif|jpg|ico)$/,
				use: 'file-loader'
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin,
		new HtmlWebpackPlugin({ title: 'Plugin Title', template : './src/index.html' })
	]
};
