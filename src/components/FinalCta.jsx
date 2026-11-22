import LeadForm from "./LeadForm";
import styles from "./FinalCta.module.scss";

export default function FinalCta() {
  return (
    <section className="section section--dark">
      <div className={`container grid ${styles.inner}`}>
        <div className="col-7">
          <h2 className={styles.title}>Ready to see what your home is worth?</h2>
          <p className={styles.lead}>
            Request your free estimate. A local agent will reply within 24 hours.
          </p>
        </div>
        <div className="col-5">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
