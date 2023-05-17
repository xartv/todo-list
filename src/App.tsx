import { TodoControls } from "./components/TodoControls";
import { TodoList } from "./components/TodoList";

import s from "./App.module.css";

function App() {
  return (
    <div className={s.container}>
      <TodoControls />

      <TodoList />
    </div>
  );
}

export default App;
