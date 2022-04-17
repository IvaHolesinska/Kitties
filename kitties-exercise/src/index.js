import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return <div>Article</div>;
};

root.render(<App />);
