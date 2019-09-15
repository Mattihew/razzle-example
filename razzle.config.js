"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */

const LoadablePlugin = require("@loadable/webpack-plugin");

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        forkTsChecker: {
          tslint: false,
          eslint: true
        }
      }
    }
  ],
  modify(defaultConfig, { target, dev }, webpack) {
    const config = defaultConfig;

    config.resolve.extensions.push(".ts", ".tsx");
    config.module.rules.push({
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    });

    if (target === "web") {
      config.plugins.push(
        new LoadablePlugin({
          path: undefined,
          filename: "../loadable-stats.json",
          writeToDisk: true
        })
      );
      config.output.filename = dev
        ? "static/js/[name].js"
        : "static/js/[name].[contentHash:8].js";
      config.optimization.splitChunks = { chunks: "all" };
    }

    return config;
  }
};
