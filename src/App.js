import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Cauldron from "./components/Cauldron";
import FrogList from "./components/FrogList";
import Upgrades from "./components/Upgrades";

class App extends React.Component {
  state = {
    frogspawn: 10,
    cauldronPending: 0,
    adultFrogs: 0,
    magicFrogs: 0,
  };
  // setInterval MDN
  render() {
    return (
      <div className="App">
        <Header />
        <p>Current frogspawn: {this.state.frogspawn}</p>
        <button onClick={this.handleTadpoleClick}>
          Place frogspawn in the cauldron
        </button>
        <Cauldron />
        <FrogList />
        <Upgrades />
      </div>
    );
  }
}

export default App;
