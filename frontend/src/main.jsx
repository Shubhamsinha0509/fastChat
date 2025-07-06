import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        position: "top-center",
        duration: 1000,
        success: {
          style: { background: "#4CAF50", color: "inherit" },
        },
        error: {
          style: { background: "#FF7B7B", color: "inherit" },
        },
        
      }}
    />
  </StrictMode>
);
