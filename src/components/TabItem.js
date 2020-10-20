import React from "react";
import "react-tabs/style/react-tabs.css";

function TabItem(props) {
  return <div className="tab-item">{props.category}</div>;
}

export default TabItem;
