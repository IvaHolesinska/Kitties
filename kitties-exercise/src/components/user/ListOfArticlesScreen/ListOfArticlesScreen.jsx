import cat1 from '../../images/cat1.svg';
import cat2 from '../../images/cat2.svg';
import { mockArticles } from '../../../constants/mockData';

import React from 'react';
import './style.css';

export const ListOfArticlesScreen = () => {
  const mockImages = [
    { imageId: '1', img: cat1 },
    { imageId: '2', img: cat2 },
  ];

  mockImages.map((article) => {
    const image = mockArticles.find((img) => article.imageId === img.imageId);
    console.log(image);
    return image;
  });

  return (
    <div className="main-container">
      {mockArticles.map((article) => (
        <div key={article.articleId} className="text-container">
          <h4>{article.title}</h4>
          <p>{article.createdAt}</p>
          <p>{article.perex}</p>
        </div>
      ))}
    </div>
  );
};
