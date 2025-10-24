import { articleTitleProps } from "../types";

export default function ArticleTitle({ title }: articleTitleProps) {
  return <div className="article-title">{title}</div>;
}
