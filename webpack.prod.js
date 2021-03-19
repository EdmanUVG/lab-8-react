const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
	  filename: "[name].[contenthash].bundle.js",
	  path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), 
		  new TerserPlugin(),
		  new HtmlWebpackPlugin( {
			  template: "./src/index.html",
			  filename: "index.html",
			  chunks: ["index"],
			  minify: {
				  removeAttributeQuotes: true,
				  collapseWhitespace: true,
				  removeComments: true
			  }
		  }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].bundle.css"}),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpeg|png|jpg|svg|gif)$/,
			  use: {
				  loader: "file-loader",
					  options: {
						  name: "[path][name].[ext]"
					  },
				  },
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ],
  },
};