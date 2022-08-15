import React from "react";

// Layouts
import { StandardLayout } from "@layout";

interface Props {
  //
}

const Home: React.FC<Props> = ({}) => {
  return (
    <StandardLayout>
      <div>Hi mom!</div>
    </StandardLayout>
  );
};

export default Home;
