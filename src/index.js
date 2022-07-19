import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { AuthContextProvider } from "./contexts/AuthContext";
import { InviteContextProvider } from "./contexts/InviteContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <InviteContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </InviteContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
