import React from "react";
import { useParams } from "react-router-dom";

// Layouts
import { StandardLayout } from "@layout";

interface Props {
  //
}

const Preparation: React.FC<Props> = ({}) => {
  let params = useParams();

  return (
    <StandardLayout>
      <div>Preparation Page</div>
    </StandardLayout>
  );
};

export default Preparation;
