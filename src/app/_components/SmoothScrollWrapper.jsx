"use client";
import ReactLenis from "@studio-freight/react-lenis";
import React, { Children } from "react";

const SmoothScrollWrapper = (props) => {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {props.children}
    </ReactLenis>
  );
};

export default SmoothScrollWrapper;
