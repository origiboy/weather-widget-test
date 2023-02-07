const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');


module.exports = (env, argv) => {
  const IS_PRODUCTION = argv.mode === 'production';

  const config = {
    entry: './src/index.ts',
    output: {
      path: dist,
      filename: "[name]-[contenthash].js",
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    mode: argv.mode,
    devServer: {
      static: dist,
      allowedHosts: 'all'
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          IS_PRODUCTION ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader?url=false",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:6]",
              },
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
       {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }, {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
              loader: 'ts-loader',
              options: {
                  configFile: path.resolve(__dirname, './tsconfig.json'),
                  appendTsSuffixTo: [/\.vue$/]
              }
          }
      ]
      }]
    },
    optimization: {
      minimizer: [
        `...`,
        new CssMinimizerPlugin()
      ],
    }
  };


  if (IS_PRODUCTION) {
    config.plugins.push(new MiniCssExtractPlugin({
      filename: "[contenthash].css"
    }));

  }

  return config;
}