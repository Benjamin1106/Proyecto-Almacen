import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx"; // Implementacion de tipo de exportacion sacando el default.
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
