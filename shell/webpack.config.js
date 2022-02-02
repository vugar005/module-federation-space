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
            "mfe2": "http://localhost:4202/remoteEntry.js",
        },
        shared: {
          // Angular
          "@angular/core": { requiredVersion: '13.2.0' },
          "@angular/common": { requiredVersion: '13.2.0' },
          "@angular/common/http": { requiredVersion: '13.2.0' },
          "@angular/router": { requiredVersion: '13.2.0' },
          "@angular/platform-browser": {requiredVersion: '13.2.0' },
          "@angular/platform-browser/animations": {requiredVersion: '13.2.0' },
          // RxJs
          "rxjs": { requiredVersion: '7.4.0' },
          "rxjs/operators": { requiredVersion: '7.4.0' },
          // Material
          "@angular/cdk": {requiredVersion: '13.2.0' },
          "@angular/material/table": {requiredVersion: '13.2.0' },
          "@angular/material/list": {requiredVersion: '13.2.0' },
          "@angular/material/icon": {requiredVersion: '13.2.0' },
          "@angular/material/badge": {requiredVersion: '13.2.0' },
          "@angular/material/menu": {requiredVersion: '13.2.0' },
          "@angular/material/button": {requiredVersion: '13.2.0' },
        }
    }),
  ],
};
