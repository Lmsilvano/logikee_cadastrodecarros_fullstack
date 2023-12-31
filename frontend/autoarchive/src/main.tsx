import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import { basic } from "./Theme";
import { EditContextProvider } from "./context/editContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={basic}>
      <EditContextProvider>
        <GlobalStyle />
        <App />
      </EditContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
