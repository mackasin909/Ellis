import LeadForm from "./LeadForm";
import { CheckIcon } from "./Icons";
import styles from "./Hero.module.scss";

const perks = ["Local agent", "Free", "No obligation"];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container grid ${styles.inner}`}>
        <div className={`col-7 ${styles.text}`}>
          <p className={styles.badge}>Free home valuation</p>
          <h1 className={styles.title}>What&rsquo;s your home worth today?</h1>
          <p className={styles.lead}>
            Get a free, no-obligation estimate from a local agent within 24 hours.
          </p>
          <ul className={styles.perks}>
            {perks.map((p) => (
              <li key={p}>
                <CheckIcon className={styles.check} />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <LeadForm id="estimate" subtitle="It takes about a minute." />
        </div>
      </div>

      <svg className={styles.skyline} viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path d="M70 48V22l24-14 24 14v26zM380 48V20l26-16 26 16v28zM720 48V22l24-14 24 14v26zM1090 48V20l26-16 26 16v28z" />
        <path d="M0 34h1440v14H0z" />
      </svg>
    </section>
  );
}
