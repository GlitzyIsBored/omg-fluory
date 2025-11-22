import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Omg.scss";
import App from "./Omg.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
