import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      {/* <div className={styles.headerText}>
        <h1>
          Radiating hope,
          <span> Healing lives</span>
        </h1>
      </div> */}
      <button
        className={`btn btn-blue ${styles.headerBtn}`}
        onClick={() => navigate("contact")}
      >
        Contact us
      </button>
    </header>
  );
}

export default Header;
