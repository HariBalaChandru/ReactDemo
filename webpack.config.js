const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname);

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      constants: `${srcPath}/constants/`,
      components: `${srcPath}/components/`,
      containers: `${srcPath}/containers/`,
      ducks: `${srcPath}/state/ducks/`,
      lib: `${srcPath}/lib`,
      models: `${srcPath}/models`,
    },
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
}