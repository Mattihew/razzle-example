import { ChunkExtractor } from "@loadable/server";
import { ServerStyleSheets } from "@material-ui/styles";
import express from "express";
import { resolve } from "path";
import React from "react";
import { renderToStaticNodeStream, renderToString } from "react-dom/server";
import { StaticRouterContext } from "react-router";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import Document from "./Document";

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use((req, res) => {
    const statsFile = resolve("./build/loadable-stats.json");
    const extractor = new ChunkExtractor({ statsFile, entrypoints: "client" });
    const sheets = new ServerStyleSheets();
    const context: StaticRouterContext = {};
    const html = renderToString(
      extractor.collectChunks(
        sheets.collect(
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        )
      )
    );

    if (context.statusCode) {
      res.status(context.statusCode);
    }
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.write("<!DOCTYPE html>");
      renderToStaticNodeStream(
        <Document
          headElements={[
            ...extractor.getLinkElements(),
            ...extractor.getStyleElements(),
            sheets.getStyleElement(),
            ...extractor.getScriptElements()
          ]}
        >
          {html}
        </Document>
      ).pipe(res);
    }
  });

export default server;
