import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApiCalls } from './constants/apiCalls';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  // get apiKey & access token
  ApiCalls();
  return (
    <>
      <div></div>
    </>
  );
};

root.render(<App />);
