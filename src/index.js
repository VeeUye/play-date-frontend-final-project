import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import events from "../src/assets/data/dummyEvents.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App events={events.events}/>
    </BrowserRouter>
  </React.StrictMode>
);
