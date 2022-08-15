import React from "react";

// CSS
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["app-name"]}>Preparation App</h1>
      <nav className={styles["nav"]}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list--item"]}>Home</li>
          <li className={styles["nav-list--item"]}>Log Out</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
