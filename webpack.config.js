const path = require('path');

module.exports = {
	mode: "development",
	devtool: "none",
	entry: "./src/js/third_depOnSecond.js",
	output: {
		filename : "main.js",
		path : path.resolve(__dirname, "dist")
	},
	module : {
		rules : [
		 {
		 	test: /\.css$/,
		 	use : ["style-loader","css-loader"]
		 }
		]
	}

}