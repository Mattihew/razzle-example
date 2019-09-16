import React, { FunctionComponent } from "react";
import Status from "./util/Status";
import Title from "./util/Title";

const NotFound: FunctionComponent = () => (
  <Title title="Not Found">
    <Status statusCode={404}>
      <h1>Page not found</h1>
    </Status>
  </Title>
);

export default NotFound;
