import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDivide,
  faTimes,
  faMinus,
  faPlus,
  faEquals
} from "@fortawesome/free-solid-svg-icons";
library.add([faDivide, faTimes, faMinus, faPlus, faEquals]);

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <div className="row calc-container">
        <div className="col-10">
          <div className="row">
            <div className="col-12 clear-button-column">
              <div className="clear-button-container">
                <ActionButton
                  text="Clear"
                  clearButton={"clear-button"}
                  buttonStyle={"clear-button"}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 top-numbers">
              <NumberButton text="7" buttonStyle={"number-button"} />
            </div>
            <div className="col-4 top-numbers">
              <NumberButton text="8" buttonStyle={"number-button"} />
            </div>
            <div className="col-4 top-numbers">
              <NumberButton text="9" buttonStyle={"number-button"} />
            </div>
          </div>
          <div className="row">
            <div className="col-4 mid-numbers">
              <NumberButton text="4" buttonStyle={"number-button"} />
            </div>
            <div className="col-4 mid-numbers">
              <NumberButton text="5" buttonStyle={"number-button"} />
            </div>
            <div className="col-4 mid-numbers">
              <NumberButton text="6" buttonStyle={"number-button"} />
            </div>
          </div>
          <div className="row">
            <div className="col-4 bottom-numbers">
              <NumberButton text="1" buttonStyle={"number-button"} />
            </div>
            <div className="col-4 bottom-numbers">
              <NumberButton text="2" buttonStyle={"number-button"} />
            </div>
            <div className="col-4 bottom-numbers">
              <NumberButton text="3" buttonStyle={"number-button"} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 clear-button-column">
              <div className="zero-button-container">
                <ActionButton
                  text="0"
                  clearButton={"clear-button"}
                  buttonStyle={"zero-button"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 actions-container">
          <ActionButton
            text={<FontAwesomeIcon icon={faDivide} color={"white"} />}
            buttonStyle={"symbol-button"}
          />
          <ActionButton
            text={<FontAwesomeIcon icon={faTimes} color={"white"} />}
            buttonStyle={"symbol-button"}
          />
          <ActionButton
            text={<FontAwesomeIcon icon={faMinus} color={"white"} />}
            buttonStyle={"symbol-button"}
          />
          <ActionButton
            text={<FontAwesomeIcon icon={faPlus} color={"white"} />}
            buttonStyle={"symbol-button"}
          />
          <ActionButton
            text={<FontAwesomeIcon icon={faEquals} color={"white"} />}
            buttonStyle={"symbol-button"}
          />
          {/* <ActionButton />
          <ActionButton />
          <ActionButton />
          <ActionButton /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
