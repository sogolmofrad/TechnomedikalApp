import styles from "./AcademyHeader.module.css";
function AcademyHeader() {
  return (
    <header className={styles.header}>
      <figure className={styles.headerImg}>
        <img src="/images/header-academy.gif" alt="header" />
      </figure>
    </header>
  );
}

export default AcademyHeader;
