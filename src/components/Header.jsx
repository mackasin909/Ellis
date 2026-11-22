import { HouseIcon } from "./Icons";
import styles from "./Header.module.scss";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#agent", label: "Your agent" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <>
      <p className={styles.banner}>
        Concept project for a portfolio. All names, reviews and copy on this page are samples.
      </p>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <a href="#top" className={styles.logo}>
            <HouseIcon className={styles.logoIcon} />
            Ellis Home Value
          </a>
          <nav className={styles.nav} aria-label="Main">
            <ul className={styles.links}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="tel:+15550100199">(555) 010-0199</a>
              </li>
            </ul>
            <a href="#estimate" className={styles.cta}>
              Get my home value
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
