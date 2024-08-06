import React, { useEffect, useState } from 'react';
import './Academy_Article.scss';
import { useParams } from 'react-router-dom';
import http from '../../../../Services/httpService';

const Academy_Article = () => {

  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const getArticleById = async (id) => {
    const response = await http.get(`articles/${id}/get-article`);
    return response.data.article;
  };

  useEffect(() => {
    const fetchArticle = async () => {
      const fetchedArticle = await getArticleById(id);
      setArticle(fetchedArticle);
    };
    fetchArticle();
  }, [id]);

  return (
    <div className='Academy_Article'>
      {article ? (
        <article>
          <div className='Academy_Article_Image'>
            <img src={article.imageUrl} alt={article.title} />
          </div>
          <div className='Title'>
            <h1>{article.title}</h1>
          </div>
          <div
            className='Content'
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      ) : (
        <div className='Loading'>

        </div>
      )}
    </div>
  );
};

export default Academy_Article;