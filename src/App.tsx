import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { TodosPage } from "./pages/TodosPage";
import { TestPage } from "./pages/TestPage";
import { AppHeader } from "./components/AppHeader";
import { NothingFoundPage } from "./pages/NothingFoundPage";

import s from "./App.module.css";

function App() {
  return (
    <div className={s.container}>
      <BrowserRouter>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Navigate to="/todos" />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/info" element={<TestPage />} />
          <Route path="*" element={<NothingFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
