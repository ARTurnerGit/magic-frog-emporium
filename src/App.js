import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Cauldron from "./components/Cauldron";
import FrogList from "./components/FrogList";
import Upgrades from "./components/Upgrades";
import { Howl, Howler } from "howler";
import ambiencesrc from "./resources/ambience.webm";
import coinsrc from "./resources/coin.webm";

const ambience = new Howl({
  src: [ambiencesrc],
  autoplay: true,
  preload: true,
  volume: 1,
  onplayerror: function () {
    ambience.once("unlock", function () {
      ambience.play();
    });
  },
});

ambience.play();

const ding = new Howl({
  src: [coinsrc],
  preload: true,
  volume: 1,
});
class App extends React.Component {
  state = {
    frogspawn: 10,
    cauldronPending: 0,
    adultFrogs: 0,
    magicFrogs: 0,
    mp: 0,
  };

  handleTadpoleClick = () => {
    ding.play();
    this.state.frogspawn >= 1 &&
      this.setState((currentState) => {
        return {
          frogspawn: currentState.frogspawn - 1,
          cauldronPending: currentState.cauldronPending + 1,
        };
      });
  };
  matureFrogs = () => {
    this.state.cauldronPending >= 1 &&
      this.setState((currentState) => {
        return {
          cauldronPending: currentState.cauldronPending - 1,
          adultFrogs: currentState.adultFrogs + 1,
        };
      });
  };

  layFrogspawn = () => {
    this.state.adultFrogs >= 1 &&
      this.setState((currentState) => {
        return {
          frogspawn: currentState.frogspawn + this.state.adultFrogs,
        };
      });
  };

  componentDidMount() {
    setInterval(this.matureFrogs, 5000);
    setInterval(this.layFrogspawn, 5000);
  }

  render() {
    const {
      frogspawn,
      cauldronPending,
      adultFrogs,
      magicFrogs,
      mp,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <p>Current frogspawn: {frogspawn}</p>
        <button onClick={this.handleTadpoleClick}>
          Place frogspawn in the cauldron
        </button>
        <Cauldron cauldronPending={cauldronPending} />
        <FrogList adultFrogs={adultFrogs} magicFrogs={magicFrogs} />
        <Upgrades mp={mp} />
      </div>
    );
  }
}

export default App;
