import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";

import "./app/styles/index.css";
import { StoreProvider } from "./app/providers/StoreProvider/ui/StoreProvider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
