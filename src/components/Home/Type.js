import React from "react";
import Typewriter from "typewriter-effect";
import { ANALYST_SKILLS } from "../../constants";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ANALYST_SKILLS,
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
        delay: 50,
        cursor: "_",
        wrapperClassName: "typewriter-text",
        cursorClassName: "typewriter-cursor",
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(500)
          .changeDeleteSpeed(30)
          .start();
      }}
    />
  );
}

export default Type;