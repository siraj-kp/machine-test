import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabItem(props) {
  return <div className="tab-item">{props.category}</div>;
}

export default TabItem;
