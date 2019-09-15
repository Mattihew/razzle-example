import { loadableReady } from "@loadable/component";
import React, { FunctionComponent } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const Main: FunctionComponent = () => {
  React.useEffect(() => {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
loadableReady(() => {
  hydrate(<Main />, document.getElementById("root"));
});

if (module.hot) {
  module.hot.accept();
}
