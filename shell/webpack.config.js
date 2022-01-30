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
          // Angular
          "@angular/core": { requiredVersion: '13.1.1' },
          "@angular/common": { requiredVersion: '13.1.1' },
          "@angular/common/http": { requiredVersion: '13.1.1' },
          "@angular/router": { requiredVersion: '13.1.1' },
          "@angular/platform-browser/animations": {requiredVersion: '13.1.3' },
          // RxJs
          "rxjs": { requiredVersion: '7.4.0' },
          "rxjs/operators": { requiredVersion: '7.4.0' },
          // Material
          "@angular/cdk": {requiredVersion: '13.1.3' },
          "@angular/material/table": {requiredVersion: '13.1.3' },
        }
    }),
  ],
};
