import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import CounterApp from "./components/index";

const RootComponent = () => {
  return (
    <div>
      <CounterApp />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
