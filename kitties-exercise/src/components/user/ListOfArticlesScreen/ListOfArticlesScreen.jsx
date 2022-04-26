import { mockArticles } from '../../../constants/mockData';
import { mockImages } from '../../../constants/mockData';

import React from 'react';
import './style.css';

export const ListOfArticlesScreen = () => {
  return (
    <div>
      {mockImages?.map((cat) => (
        <div>
          {mockArticles.map((article) => (
            <>
              {cat.imageId === article.imageId ? (
                <div className="main-container">
                  <img className="image" key={cat.imageId} src={cat.img}></img>
                  <div className="text-container" key={article.createdAt}>
                    <h4>{article.title}</h4>
                    <p>{article.createdAt}</p>
                    <p>{article.perex}</p>
                  </div>{' '}
                </div>
              ) : undefined}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};
