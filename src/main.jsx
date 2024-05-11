import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.js";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <KindeProvider
        clientId="4f1c70f99173473785650f5bf5c6ce84"
        domain="https://isuruakalanka.kinde.com"
        redirectUri="https://zealous-coast-07043e110.5.azurestaticapps.net/"
        logoutUri="https://zealous-coast-07043e110.5.azurestaticapps.net/"
      >
        <App />
      </KindeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
