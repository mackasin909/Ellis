import { CheckIcon } from "./Icons";
import styles from "./Agent.module.scss";

const points = ["Local market focus", "Plain-language advice", "Reply within 24 hours"];

export default function Agent() {
  return (
    <section id="agent" className={`section section--surface ${styles.section}`}>
      <div className={`container grid ${styles.inner}`}>
        <div className={`col-5 ${styles.card}`}>
          <span className={styles.avatar} aria-hidden="true">
            JE
          </span>
          <p className={styles.name}>Jordan Ellis</p>
          <p className={styles.role}>Sales Representative</p>
          <p className={styles.brokerage}>[Brokerage name], Brokerage</p>
        </div>
        <div className="col-7">
          <h2 className="section-title">Meet your local agent</h2>
          <p className={styles.bio}>
            Sample bio: Jordan helps homeowners understand what their property is worth before they
            decide what to do next. Replace this text with the agent&apos;s real background, areas
            served and years of experience.
          </p>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p}>
                <CheckIcon className={styles.check} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
