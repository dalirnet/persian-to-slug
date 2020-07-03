const path = require("path");
const webpack = require("webpack");
const packageJson = require("./package.json");

// banner
let banner = `
    PersianToSlug v${packageJson.version}
    url           https://github.com/dalirnet/persian-to-slug#readme
`;

module.exports = [
  {
    target: "web",
    mode: "production",
    entry: "./index.js",
    plugins: [new webpack.BannerPlugin({ banner })],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    optimization: {
      minimize: true,
    },
    output: {
      filename: "persian-to-slug.js",
      path: path.resolve(__dirname, "dist"),
      library: "PersianToSlug",
    },
    performance: {
      hints: false,
    },
  },
];
