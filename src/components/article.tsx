import ReviewTextOne from "./review-text-one";
import ReviewTextTwo from "./review-text-two";

function Article() {
  return (
    <article className="section">
      <header className="article-header">
        <h2>Star Wars: Jedi Fallen Order 2 - Review</h2>
      </header>
      <main>
        <ReviewTextOne />
        <ReviewTextTwo />
      </main>
    </article>
  );
};

export default Article;
