import React, { useEffect } from "react";
import Article from "./Article";

export default function ArticleContainer() {

    const [articlesShown, setArticlesShown] = React.useState(10);
    const [articlesData, setArticlesData] = React.useState(null);

    const getArticlesData = () => {
        fetch("http://localhost:8000/today")
            .then(response => response.json())
            .then(artisData => setArticlesData(artisData))
            .catch(err => console.log(err))
    }

    useEffect(() => getArticlesData(), []);

    const totalArtCount = articlesData?.length;

    //increase the number of articles shown when the user clicks the button
    function showMoreArts() {
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
                    headline={article.headline.main}
                    temporaryContent={article.abstract}
                    section={article.section_name}
                    author={article.byline.person}
                    link={article.web_url} />
            ))}

            <button className="articles-button" onClick={showMoreArts}>
                See More
            </button>
        </div>
    )
}