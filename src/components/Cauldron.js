import React from "react";

function Cauldron(props) {
  const { cauldronPending } = props;
  return (
    <figure>
      <img
        src="https://i7.pngguru.com/preview/453/196/16/magic-witchcraft-computer-software-computer-icons-clip-art-cauldron.jpg"
        alt="bubbling cauldron"
        title="Your cauldron grows frogs from frogspawn. 1 frogspawn takes 10 seconds to develop into an adult frog"
      />{" "}
      <figcaption>Tadpoles growing in Cauldron: {cauldronPending}</figcaption>
    </figure>
  );
}

export default Cauldron;
