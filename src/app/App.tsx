import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppHeader } from "../widgets/AppHeader";
import { AppRouter } from "./providers/router";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === "/") {
      navigate("/todos");
    }
  }, [navigate, pathname]);

  return (
    <div className="container">
      <AppHeader />
      <AppRouter />
    </div>
  );
}

export default App;
