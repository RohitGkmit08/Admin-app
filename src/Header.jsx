import React, { useContext } from "react";
import AccordionContext from "./context/AccordionContext";

const Header = ({children, index}) => {
    const { openIndex, toggleItem } = useContext(AccordionContext);
    const isOpen = openIndex === index;

    return (
        <button className="accordion-title"
        onClick={() => toggleItem(index)}
        >
            <span className="accordion-text">{children}</span>
            <span className="accorion-item">
                {isOpen ? "⬆️" : "⬇️"}
            </span>
        </button>
    )
}

export default Header