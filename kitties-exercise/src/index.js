import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApiCalls } from './constants/apiCalls';
import { UploadArticleScreen } from './components/admin/UploadScreen/UploadArticlesScreen';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  // get apiKey & access token
  ApiCalls();
  return (
    <>
      <UploadArticleScreen />
    </>
  );
};

root.render(<App />);
