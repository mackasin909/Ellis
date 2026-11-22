import { ChevronIcon } from "./Icons";
import styles from "./Faq.module.scss";

const items = [
  {
    q: "Is it really free?",
    a: "Yes. The estimate is free and carries no obligation to list your home.",
  },
  {
    q: "How accurate is the estimate?",
    a: "It is based on recent sales of comparable homes nearby and local market knowledge. For an exact figure, the agent can arrange a short in-person visit.",
  },
  {
    q: "Do I have to sell?",
    a: "No. Many homeowners simply want to know where they stand. There is no pressure to do anything next.",
  },
  {
    q: "How do you use my data?",
    a: "Your details are only used to prepare and send your estimate. We never sell or share them.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section section--surface">
      <div className={`container ${styles.inner}`}>
        <h2 className="section-title section-head">Questions, answered</h2>
        <div className={styles.list}>
          {items.map((item, i) => (
            <details key={item.q} name="faq" className={styles.item} open={i === 0}>
              <summary className={styles.question}>
                {item.q}
                <ChevronIcon className={styles.chevron} />
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
