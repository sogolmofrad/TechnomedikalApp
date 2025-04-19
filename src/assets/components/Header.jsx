import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <figure className={styles.headerImg}>
        <img src="/images/header.gif" alt="header" />
        <button
          className={`btn btn-blue ${styles.headerBtn}`}
          onClick={() => navigate("contact")}
        >
          Contact us
        </button>
      </figure>

      {/* <div className={styles.headerText}>
        <h1>
          Radiating hope,
          <span> Healing lives</span>
        </h1>
      </div> */}
    </header>
  );
}

export default Header;
