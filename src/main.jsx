import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoaderProvider } from "./components/LoaderContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider>
  </StrictMode>
);
