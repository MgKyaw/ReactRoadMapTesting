import "./App.css";

import React, { useRef } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  animated,
  useSpringRef,
} from "react-spring";

const data = ["", "", "", ""];

function App() {
  const springRef = useSpringRef();
  const springs = useSpring({
    ref: springRef,
    from: { size: "20%" },
    to: { size: "100%" },
    config: { duration: 2500 },
  });

  const transRef = useSpringRef();
  const transitions = useTransition(data, {
    ref: transRef,
    from: { scale: 0, backgroundColor: "pink" },
    enter: { scale: 1, backgroundColor: "plum" },
    leave: { scale: 0, color: "pink" },
    config: { duration: 3500 },
  });

  useChain([springRef, transRef]);

  return (
    <animated.div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "400px",
        width: springs.size,
        background: "white",
      }}
    >
      {transitions((style, item) => (
        <animated.div
          style={{
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginLeft: "50px",
            color: "white",
            fontSize: "35px",
            borderRadius: "360px",
            ...style,
          }}
          className="products"
        >
          {item}
        </animated.div>
      ))}
    </animated.div>
  );
}

export default App;