import React from "react";

function Upgrades(props) {
  const { mp, handleUpgradeClick } = props;
  return (
    <fieldset>
      <p>Mana Points: {mp}</p>
      <ul>
        <li key="upgrade 1">
          Upgrade 1: double the amount of frogspawn produced by adult frogs.
          <button onClick={handleUpgradeClick}> Upgrade</button>
        </li>
      </ul>
    </fieldset>
  );
}

export default Upgrades;
