const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "mfe2",
    publicPath: "http://localhost:4202/",
  },
  optimization: {
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "var", name: "mfe2" },
        name: "mfe2",
        filename: "remoteEntry.js",
        exposes: {
          './web-components': './src/bootstrap.ts', // bootstrap --> main --> AppModule --> WebComp
        },
        shared: {
          // Angular
          "@angular/core": {requiredVersion: '12.2.15' },
          "@angular/common": {requiredVersion: '12.2.15' },
          "@angular/common/http": {requiredVersion: '12.2.15' },
          "@angular/router": {requiredVersion: '12.2.15' },
          "@angular/platform-browser": {requiredVersion: '12.2.15' },
          "@angular/platform-browser/animations": {requiredVersion: '12.2.15' },
          // RxJs
           "rxjs": { requiredVersion: '6.6.0' },
           "rxjs/operators": { requiredVersion: '6.6.0' },
    },
  })
  ],
};
