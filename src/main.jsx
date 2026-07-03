//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { initializeStorage } from "./services/storage.js";
import "./index.css";
import App from "./App.jsx";

initializeStorage();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
