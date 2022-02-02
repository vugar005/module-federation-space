const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfe1",
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
        name: "mfe1",
        filename: "remoteEntry.js",
        exposes: {
          './web-components': './src/bootstrap.ts', // bootstrap --> main --> AppModule --> WebComp
        },
        shared: {
          // Angular
          "@angular/core": {requiredVersion: '13.2.0' },
          "@angular/common": {requiredVersion: '13.2.0' },
          "@angular/common/http": {requiredVersion: '13.2.0' },
          "@angular/router": {requiredVersion: '13.2.0' },
          "@angular/platform-browser": {requiredVersion: '13.2.0' },
          "@angular/platform-browser/animations": {requiredVersion: '13.2.0' },
          // RxJs
           "rxjs": { requiredVersion: '7.4.0' },
           "rxjs/operators": { requiredVersion: '7.4.0' },
           // Material
          "@angular/cdk": {requiredVersion: '13.2.0' },
          "@angular/material/table": {requiredVersion: '13.2.0' },
          "@angular/material/button": {requiredVersion: '13.2.0' },
    },
  })
  ],
};
