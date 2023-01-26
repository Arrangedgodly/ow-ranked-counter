import { useState } from "react";

function Counter({ title, logo }) {
  const [wins, setWins] = useState(localStorage.getItem(`${title}-wins`) | 0);
  const [losses, setLosses] = useState(
    localStorage.getItem(`${title}-losses`) | 0
  );

  const handleIncrementWins = () => {
    if (wins === 6) {
      setWins(0);
      setLosses(0);
    } else {
      setWins(wins + 1);
    }
  };

  const handleDecrementWins = () => {
    if (wins === 0) {
      return;
    } else {
      setWins(wins - 1);
    }
  };

  const handleIncrementLosses = () => {
    if (losses === 19) {
      setWins(0);
      setLosses(0);
    } else {
      setLosses(losses + 1);
    }
  };

  const handleDecrementLosses = () => {
    if (losses === 0) {
      return;
    } else {
      setLosses(losses - 1);
    }
  };

  const handleWins = (e) => {
    if (e.target.value < 0) {
      setWins(0);
      localStorage.setItem(`${title}-wins`, 0);
    } else if (e.target.value >= 7) {
      setWins(0);
      localStorage.setItem(`${title}-wins`, 0);
      setLosses(0);
      localStorage.setItem(`${title}-losses`, 0);
    } else {
      setWins(e.target.value);
      localStorage.setItem(`${title}-wins`, e.target.value);
    }
  };

  const handleLosses = (e) => {
    if (e.target.value < 0) {
      setLosses(0);
      localStorage.setItem(`${title}-losses`, 0);
    } else if (e.target.value >= 20) {
      setWins(0);
      localStorage.setItem(`${title}-wins`, 0);
      setLosses(0);
      localStorage.setItem(`${title}-losses`, 0);
    } else {
      setLosses(e.target.value);
      localStorage.setItem(`${title}-losses`, e.target.value);
    }
  };

  const handleReset = () => {
    setWins(0);
    setLosses(0);
    localStorage.removeItem(`${title}-wins`);
    localStorage.removeItem(`${title}-losses`);
  };

  return (
    <form className="Counter">
      <h2 className="Counter__heading">{title}</h2>
      <img className="Counter__logo" src={logo} />
      <div className="Counter__inputs">
        <label htmlFor="wins" className="Counter__label">
          Wins
          <input
            type="number"
            name="wins"
            value={wins}
            onChange={handleWins}
            className="Counter__count"
          />
          <div className="Counter__buttons">
            <button type="button" onClick={handleIncrementWins} className="Counter__button">
              +
            </button>
            <button type="button" onClick={handleDecrementWins} className="Counter__button">
              -
            </button>
          </div>
        </label>
        <label htmlFor="losses" className="Counter__label">
          Losses
          <input
            type="number"
            name="losses"
            value={losses}
            onChange={handleLosses}
            className="Counter__count"
          />
          <div className="Counter__buttons">
            <button type="button" onClick={handleIncrementLosses} className="Counter__button">
              +
            </button>
            <button type="button" onClick={handleDecrementLosses} className="Counter__button">
              -
            </button>
          </div>
        </label>
      </div>
      <button type="button" className="Counter__reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}

export default Counter;
