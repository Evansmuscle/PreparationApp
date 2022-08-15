import React, { ReactNode } from "react";

// CSS
import styles from "./Standard.module.scss";

// Components
import { Footer, Header } from "@components";

interface Props {
  children: ReactNode;
}

const Standard: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Standard;
