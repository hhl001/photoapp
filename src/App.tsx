import React from "react";
import "./App.css";
import DashboardLayoutBasic from "./navigation/navigation";

function App() {
  return <DashboardLayoutBasic window={() => window} />;
}

export default App;
