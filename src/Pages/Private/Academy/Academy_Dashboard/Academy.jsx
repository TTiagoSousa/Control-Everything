import React, { useState, useEffect } from 'react';
import './Academy.scss';
import useFetchGetArticles from '../../../../Hooks/Articles/useFetchGetArticles';
import { Link } from 'react-router-dom';

const Academy = () => {
  const { articlesList } = useFetchGetArticles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading for 1 second

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className='Academy'>
      <section className='Cards'>
        {loading || !articlesList ? (
          // Display 9 loading divs
          Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className='Academy_Card Loading'>
              <div className='Top'>
                <div className='loading-image'></div>
              </div>
              <div className='Bottom'>
                <span className='loading-text'></span>
              </div>
            </div>
          ))
        ) : (
          articlesList.map(article => (
            <Link key={article.id} to={`Article/${article.id}`}>
              <div className='Academy_Card'>
                <div className='Top'>
                  <img src={article.imageUrl} alt={article.title} />
                </div>
                <div className='Bottom'>
                  <span>{article.title}</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
};

export default Academy;