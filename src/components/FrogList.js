import React from "react";

function FrogList(props) {
  const { adultFrogs, magicFrogs } = props;
  return (
    <ul>
      <li key="adultFrogs" title="Adult frogs produce 1 frogspawn per second.">
        Adult Frogs:{adultFrogs}
      </li>
      {magicFrogs > 0 ?? (
        <li
          key="magicFrogs"
          title="1/100 chance for a frog to be a magic frog! These grant MP for emporium upgrades."
        >
          Magic Frogs:{magicFrogs}
        </li>
      )}
    </ul>
  );
}

export default FrogList;
