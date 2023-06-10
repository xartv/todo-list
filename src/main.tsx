import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App.tsx';
import { StoreProvider } from './app/providers/StoreProvider/ui/StoreProvider.tsx';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
);
