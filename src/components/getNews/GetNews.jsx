import { useEffect, useState } from "react";
import "./getnews.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function GetNews() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7b406ce845b64422bb4c0ca7d7e1525b"
        );
        const articles = response.data.articles;
        setNews(articles);
        console.log(articles);
      } catch (error) {
        console.error("Error in fetching health news", error);
      }
    };

    getNews();
  }, []);

  return (
    <div className="getNewsParent">
      <h2>Get Latest Health News</h2>
      <div className="getNews">
        {news.map((article, index) => (
          <Link to={article.url} key={index} style={{ textDecoration: "none" }}>
            <div className="newsArticle">
              <p>{article.title}</p>
              <img
                src={article.urlToImage ? article.urlToImage : ""}
                alt=""
                className="newsImg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default GetNews;
