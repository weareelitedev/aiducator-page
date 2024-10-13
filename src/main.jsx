import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DialogProvider from "./hooks/useDialog.jsx";
import AlertSnackbarProvider from "./hooks/useAlertSnackbar.jsx";
import App from "./App.jsx";
import "./index.css";
import "./styles/reset.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DialogProvider>
      <AlertSnackbarProvider>
        <App />
      </AlertSnackbarProvider>
    </DialogProvider>
  </StrictMode>
);
