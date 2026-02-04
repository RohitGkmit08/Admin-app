import React, { useState } from 'react'
// simple accordion implementation

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null)
    const handleToggle = (index) => {
        setOpenIndex(openIndex == index ? null : index)
    }
  return (
    <div className="accordion">
      {items.map((item, index) => {
        return (
          <div className="accordion-item" key={index}>
            <button className="accordion-title" onClick={() => handleToggle(index)}>
                <span className="accordion-text">
                    {item.title}
                </span>
                    <span className="accordion-icon">
                         {openIndex === index ? "⬆️" : "⬇️"}
                    </span>
            </button>

            {openIndex === index && 
            <div className="accordion-content">
              {item.content}
            </div>}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
