import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { scan } from 'react-scan';
import App from './App';
import './index.css';

scan({
  enabled: true,
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
