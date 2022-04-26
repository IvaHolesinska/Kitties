import { mockArticles } from '../../../constants/mockData';
import { mockImages } from '../../../constants/mockData';

import React from 'react';
import './style.css';

// TODO: display data from APIs + sort by date created
export const ListOfArticlesScreen = () => {
  return (
    <div>
      {/* iterate through mock data (images) */}
      {mockImages?.map((cat) => (
        <div>
          {/* iterate through mock data (articles) */}
          {mockArticles.map((article) => (
            <>
              {/* find object with same imageId and display with props*/}
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
