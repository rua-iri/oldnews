import ArticleTitle from "./ArticleTitle";
import { articleProps } from "../types";

export default function Article({
  headline,
  temporaryContent,
  section,
  author,
  link,
}: articleProps) {
  return (
    <div className="article-main">
      <ArticleTitle title={headline} />
      <div>{temporaryContent}</div>
      <div>Section: {section}</div>
      <div>{author == undefined ? author : ""}</div>
      <div className="article-link">
        <a href={link}>Source</a>
      </div>
    </div>
  );
}
