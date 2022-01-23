const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
        remotes: {
            "mfe1": "http://localhost:4201/remoteEntry.js",
        },
        shared: {
          "@angular/core": { requiredVersion: '13.1.1' },
          "@angular/common": { requiredVersion: '13.1.1' },
          "@angular/common/http": { requiredVersion: '13.1.1' },
          "@angular/router": { requiredVersion: '13.1.1' },
        }
    }),
  ],
};
