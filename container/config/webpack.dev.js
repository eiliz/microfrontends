const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // marketing@ matches against the name defined with the ModuleFederationPlugin
        // for the marketing project
        // The key `marketing` here will be what we use in import statements
        marketing: "marketing@http://localhost:8081/remoteEntry.js"
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
