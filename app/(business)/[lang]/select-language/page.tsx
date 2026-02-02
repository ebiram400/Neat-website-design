import styles from "@/app/styles/select-language.module.css";
import Link from "next/link";

export default function SelectLanguagePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Select Language</h1>

      <div className={styles.grid}>
        <Link href="/fa" className={styles.card}>
          <span className={styles.lang}>FA</span>
          <span className={styles.label}>فارسی</span>
        </Link>

        <Link href="/en" className={styles.card}>
          <span className={styles.lang}>EN</span>
          <span className={styles.label}>English</span>
        </Link>

        <Link href="/ar" className={styles.card}>
          <span className={styles.lang}>AR</span>
          <span className={styles.label}>عربی</span>
        </Link>
      </div>
    </main>
  );
}
