CACHE BUSTING

1. contentHash

webpack.config.js
-------------------
output: {
		filename : "main.js",
		-->>

output: {
		filename : "main.[contentHash].js",

//add main.[contentHash].js

2. npm start

dist==>> main.5bdda50986----.js
//this main file is auto generated inside "dist"

3. but how to link this dynamically genertd main file in <script> tag in index.html??
for this we need a plugin

4==HTML WEBPACK PLUGIN==

5. npm install --save-dev html-weback-plugin

//now its inside devdepenedencies --in pkg.json

6. Add this plugin to config file
webpack.config.js
-------------------

+ var HtmlWebpackPlugin = require("html-webpack-plugin");
  module.exports= {

+ plugins: [new HtmlWebpackPlugin()],
  }

7.
===>> Now dist ==> "index.html"==//auto generated new file !!!

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
  <script type="text/javascript" src="main.5bdda50986d06f5d5708.js"></script></body>
</html>

==============
//here mai.contenthash file is auto linked to <script> tag

