import styles from "./HowItWorks.module.scss";

const steps = [
  {
    title: "Share your address",
    text: "Tell us where the property is. It takes about a minute.",
  },
  {
    title: "We review recent local sales",
    text: "We compare your home with similar properties sold nearby.",
  },
  {
    title: "You get your estimate within 24 hours",
    text: "You receive a clear estimate and can ask us anything. No obligation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">How it works</h2>
          <p className="section-lead">Three simple steps, no pressure.</p>
        </div>
        <ol className="grid">
          {steps.map((s, i) => (
            <li key={s.title} className={`col-4 ${styles.card}`}>
              <span className={styles.num} aria-hidden="true">
                {i + 1}
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
