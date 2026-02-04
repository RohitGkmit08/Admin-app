import { useContext } from "react";
import AccordionContext from "./context/AccordionContext";

const AccordionHeader = ({ children, index }) => {
  const { openIndexes, toggle } = useContext(AccordionContext);
  const isOpen = openIndexes.includes(index);

  return (
    <button
      className="accordion-title"
      onClick={() => toggle(index)}
    >
      <span>{children}</span>
      <span>{isOpen ? "⬆️" : "⬇️"}</span>
    </button>
  );
};

export default AccordionHeader;
