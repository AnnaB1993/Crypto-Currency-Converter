import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/news",
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(articles);
  const first10articles = articles?.slice(0, 10);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {first10articles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}><p>{article.title}</p></a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
