import { useState, useEffect } from "react";
import Article from "./Article";
import ErrorMessage from "./ErrorMessage";

export default function ArticleContainer() {
  const articlesShown = 10;
  const [articlesData, setArticlesData] = useState(null);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  const getArticlesData = async () => {
    try {
      const apiResponse = await fetch(
        "https://oldnews-backend.rory-mcguigan.workers.dev/api"
      );
      const apiData = await apiResponse.json();
      setArticlesData(apiData);
    } catch (error) {
      setIsErrorLoading(true);
    }
  };

  useEffect(() => {
    getArticlesData();
  }, []);

  if (articlesData) {
    return (
      <div className="article-container">
        {articlesData?.slice(0, articlesShown).map((article, index) => (
          <Article
            key={index}
            index={index}
            headline={article.headline}
            temporaryContent={article.abstract}
            section={article.section_name}
            author={article.author}
            link={article.web_url}
          />
        ))}
      </div>
    );
  } else if (isErrorLoading) {
    return <ErrorMessage message="Unable to load articles" />;
  } else {
    return (
      <div className="article-container">
        <div className="loading-container">
          <div className="loading-box"></div> {/* 1 */}
          <div className="loading-box"></div> {/* 2 */}
          <div className="loading-box"></div> {/* 3 */}
          <div className="loading-box"></div> {/* 4 */}
          <div className="loading-box"></div> {/* 5 */}
          <div className="loading-box"></div> {/* 6 */}
          <div className="loading-box"></div> {/* 7 */}
          <div className="loading-box"></div> {/* 8 */}
          <div className="loading-box"></div> {/* 9 */}
          <div className="loading-box"></div> {/* 10 */}
        </div>
      </div>
    );
  }
}
