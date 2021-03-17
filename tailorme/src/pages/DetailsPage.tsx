import React from "react";
import { CopyTextField } from "../components/CopyTextField";

export const DetailsPage: React.FC = () => {
  return (
    <div>
      <CopyTextField
        defText="https://www.linkedin.com/in/mehul-shinde-782749105/"
        label="LinkedIn"
      ></CopyTextField>
      <CopyTextField
        defText="https://mehulshinde.github.io/"
        label="Portfolio"
      ></CopyTextField>
    </div>
  );
};
