import React, { useEffect } from "react";
import Article from "./Article";

export default function ArticleContainer() {

    const [articlesShown, setArticlesShown] = React.useState(10);
    const [articlesData, setArticlesData] = React.useState(null);

    const getArticlesData = async () => {
        try {
            const apiResponse = await fetch("https://oldnews-backend.rory-mcguigan.workers.dev/api");
            const apiData = await apiResponse.json();
            console.log(apiData);
            setArticlesData(apiData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { getArticlesData() }, []);

    const totalArtCount = articlesData?.length;

    //increase the number of articles shown when the user clicks the button
    function showMoreArticles() {
        console.log("Showing " + articlesShown);

        if (articlesShown <= (totalArtCount - 5)) {
            setArticlesShown(oldShown => oldShown + 5);
        } else {
            setArticlesShown(totalArtCount);
        }
    }


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
                    link={article.web_url} />
            ))}

            {/* <button className="articles-button" onClick={showMoreArticles}>
                See More
            </button> */}
        </div>
    )
}