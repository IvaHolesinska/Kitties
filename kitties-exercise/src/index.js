import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApiCalls } from './constants/apiCalls';
import { UploadArticleScreen } from './components/admin/UploadScreen/UploadArticlesScreen';
import { Header } from './components/shared/Header';
import { ListOfArticlesScreen } from './components/user/ListOfArticlesScreen/ListOfArticlesScreen';

const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  // get apiKey & access token
  ApiCalls();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListOfArticlesScreen />} />
        {/* <Route path="/" element={<UploadArticleScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

root.render(<App />);
