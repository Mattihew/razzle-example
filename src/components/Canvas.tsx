import React, { FunctionComponent } from "react";

const Canvas: FunctionComponent = () => {
  const ref = React.useRef(null);
  return <canvas ref={ref} style={{ width: "100%" }} />;
};

export default Canvas;
