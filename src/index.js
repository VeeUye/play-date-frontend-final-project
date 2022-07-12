import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import events from "../src/assets/data/dummyEvents.json";
import { AuthContextProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App events={events.events} />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
