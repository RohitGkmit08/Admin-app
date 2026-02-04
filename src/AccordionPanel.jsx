import { useContext } from "react";
import AccordionContext from "./context/AccordionContext";

const AccordionPanel = ({ children, index }) => {
  const { openIndexes } = useContext(AccordionContext);

  if (!openIndexes.includes(index)) return null;

  return (
    <div className="accordion-content">
      {children}
    </div>
  );
};

export default AccordionPanel;
