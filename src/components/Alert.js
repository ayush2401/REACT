import React from "react";

export default function Alert(props) {

  const caiptalize = (text) => {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
      <strong> {caiptalize(props.alert.type)}</strong> : {props.alert.message}
    </div>
  );
}
