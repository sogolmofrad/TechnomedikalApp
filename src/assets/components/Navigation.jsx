import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navigation}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav className={styles.nav}>
        <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? `${styles.open}` : `${styles.navList}`}>
          <li className={styles.navItem}>
            <NavLink to="/academy">technomed academy</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/centers">centers</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/blog">blog</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/about">about</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
