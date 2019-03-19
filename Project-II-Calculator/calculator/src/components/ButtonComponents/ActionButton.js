import React from "react";
import "./Button.css";

const ActionButton = props => {
  console.log(props);
  return (
    <div className="action-button1" id={props.clearButton}>
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  );
};

export default ActionButton;
