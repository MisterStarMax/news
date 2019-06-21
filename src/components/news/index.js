import React from 'react';
import './index.css';

const NewsPage = () => {
  const news = [
    {title: 'title1', desc: 'description1'},
    {title: 'title2', desc: 'description2'},
    {title: 'title3', desc: 'description3'},
  ];
  return(
    <div className="list-news">
    {
      news.map((el, key) => {
        return(
          <div key={key} className="item-news">
            <span>{el.title}</span>
            <p>{el.desc}</p>
          </div>
        );
      })
    }
    </div>
  );
}

export default NewsPage;
