import React from "react";

function MessageBox(props) {
  return (
    <div>
      <i className={`alert alert-${props.variant || "info"}`}>
        {props.children}
      </i>
    </div>
  );
}

export default MessageBox;
