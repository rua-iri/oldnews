export default function ErrorMessage({ message = "Something Went Wrong" }) {
  return (
    <div className="article-container">
      <div className="article-main">
        Error: {message}
        <div>Please Try Again Later</div>
      </div>
    </div>
  );
}
