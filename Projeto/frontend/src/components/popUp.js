import React from "react";

function PopUp(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={props.onClose}>X</button>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default PopUp;
