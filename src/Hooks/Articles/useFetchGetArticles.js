import { useState, useEffect } from 'react';
import http from '../../Services/httpService';

const useFetchGetArticles = () => { 

  const [ articlesList, setArticlesList ] = useState(null)
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {

    const fetchGetArticles = async () => {
      try {

        const response = await http.get(`articles/get-articles-paginated?page=${currentPage}`);

        setArticlesList(response.data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchGetArticles();
  }, [currentPage]); 

  return { articlesList };

}

export default useFetchGetArticles;