import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.brand}>Ellis Home Value</p>
        <p>
          Jordan Ellis, Sales Representative · [Brokerage name], Brokerage · Licence no.
          [placeholder]
        </p>
        <p>Privacy policy [link to be added]</p>
        <p className={styles.legal}>
          [Advertising and consent wording to be supplied by the client&apos;s brokerage.] Concept
          project: not a real business.
        </p>
      </div>
    </footer>
  );
}
