
import { AppHeader } from "../widgets/AppHeader";
import { AppRouter } from "./providers/router";

function App() {
  return (
    <div className='container'>
      <AppHeader />
      <AppRouter />
    </div>
  );
}

export default App;
