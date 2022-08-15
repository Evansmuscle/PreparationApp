import React from "react";

// CSS
import styles from "./Footer.module.scss";

// Icons
import { AiFillLinkedin, AiOutlineGitlab, AiFillGithub } from "react-icons/ai";

interface Props {
  //
}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["user-info"]}>
        <h1 className={styles["user-info--author"]}>
          Author: Yigit Kaan Korkmaz
        </h1>
        <p className={styles["user-info--description"]}>
          To get in touch, you can use my contact links at the right side:
        </p>
      </div>
      <ul className={styles["user-links"]}>
        <li className={styles["user-links--link-container"]}>
          <AiFillLinkedin className={styles["user-links--link-icon"]} />
          <a
            rel="noreferrer"
            target="_blank"
            className={styles["user-links--link-anchor"]}
            href="https://www.linkedin.com/in/yi%C4%9Fit-kaan-korkmaz-785845208/"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles["user-links--link-container"]}>
          <AiFillGithub className={styles["user-links--link-icon"]} />
          <a
            rel="noreferrer"
            target="_blank"
            className={styles["user-links--link-anchor"]}
            href="https://github.com/Evansmuscle"
          >
            GitHub
          </a>
        </li>
        <li className={styles["user-links--link-container"]}>
          <AiOutlineGitlab className={styles["user-links--link-icon"]} />
          <a
            rel="noreferrer"
            target="_blank"
            className={styles["user-links--link-anchor"]}
            href="https://gitlab.com/Evansmuscle"
          >
            GitLab
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
