import React, { ReactNode } from "react";

// CSS
import styles from "./Auth.module.scss";

interface Props {
  children: ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Auth;
