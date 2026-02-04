import { useState } from "react";
import AccordionContext from "./context/AccordionContext";

import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";

const Accordion = ({
  children,
  allowMultiple = false,
  defaultOpenIndexes = [],
}) => {
  // INTERNAL STATE 
  const [openIndexes, setOpenIndexes] = useState(defaultOpenIndexes);

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      }
      return prev[0] === index ? [] : [index];
    });
  };

  return (
    <AccordionContext.Provider value={{ openIndexes, toggle }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

/* Compound API */
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;

export default Accordion;
