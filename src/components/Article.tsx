import ArticleTitle from "./ArticleTitle";

export default function Article(props: any) {


    return (
        <div className="article-main">
            <ArticleTitle title={props.headline} />
            <div>
                {props.temporaryContent}
            </div>
            <div>
                Section: {props.section}
            </div>
            <div>
                {props.author == undefined ? props.author : ""}
            </div>
            <div>
                <a href={props.link}>
                    Source
                </a>
            </div>
        </div>
    )
}