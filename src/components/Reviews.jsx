import styles from "./Reviews.module.scss";

const reviews = [
  {
    quote: "Clear, quick and no pressure. I understood my options after one conversation.",
    author: "Sample Client A, homeowner",
  },
  {
    quote: "The estimate came back the next day, with the recent sales it was based on.",
    author: "Sample Client B, homeowner",
  },
  {
    quote: "Honest advice, even though I wasn't ready to list yet.",
    author: "Sample Client C, homeowner",
  },
];

export default function Reviews() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">What homeowners say</h2>
          <p className={styles.note}>Sample reviews for this concept project</p>
        </div>
        <ul className="grid">
          {reviews.map((r) => (
            <li key={r.author} className={`col-4 ${styles.card}`}>
              <figure>
                <blockquote className={styles.quote}>&ldquo;{r.quote}&rdquo;</blockquote>
                <figcaption className={styles.author}>{r.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
