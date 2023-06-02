import React from "react";

const NoSSR = () => {
  return (
    <>
      <div>NoSSR</div>
      <p>width : {window.innerWidth}</p>
    </>
  );
};

export default NoSSR;
