import React, { FunctionComponent } from "react";
import Status from "./Status";

const NotFound: FunctionComponent = () => (
  <Status statusCode={404}>
    <h1>Page not found</h1>
  </Status>
);

export default NotFound;
