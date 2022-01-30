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
          "@angular/core": {requiredVersion: '13.1.3' },
          "@angular/common": {requiredVersion: '13.1.3' },
          "@angular/common/http": {requiredVersion: '13.1.3' },
          "@angular/router": {requiredVersion: '13.1.3' },
          "@angular/platform-browser/animations": {requiredVersion: '13.1.3' },
          // Material
          "@angular/cdk": {requiredVersion: '13.1.3' },
          "@angular/material/table": {requiredVersion: '13.1.3' },
    },
  })
  ],
};
