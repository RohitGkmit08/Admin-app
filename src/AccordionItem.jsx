import { Children, cloneElement } from "react";

const AccordionItem = ({ children, index }) => {
  return (
    <div className="accordion-item">
      {Children.map(children, (child) =>
        cloneElement(child, { index })
      )}
    </div>
  );
};

export default AccordionItem;
