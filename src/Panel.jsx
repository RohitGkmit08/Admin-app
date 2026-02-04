import React, { useContext } from "react";
import AccordionContext from "./context/AccordionContext";
const Panel = ({ children, index }) => {
  const { openIndex } = useContext(AccordionContext);

  if (openIndex !== index) return null;

  return (
    <div className="accordion-content">
      {children}
    </div>
  );
};

export default Panel;
