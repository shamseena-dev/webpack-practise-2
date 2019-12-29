const path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "none",
	entry: "./src/js/third_depOnSecond.js",
	output: {
		filename : "main.[contentHash].js",
		path : path.resolve(__dirname, "dist")
	},
	plugins: [new HtmlWebpackPlugin()],
	module : {
		rules : [
		 {
		 	test: /\.css$/,
		 	use : ["style-loader","css-loader"]
		 }
		]
	}

}