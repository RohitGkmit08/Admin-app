import React from 'react'

const Accordion1 = ({ items, openIndexes, onToggle }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)

        return (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-title"
              onClick={() => onToggle(index)}
            >
              <span className="accordion-text">{item.title}</span>
              <span className="accordion-icon">
                {isOpen ? "⬆️" : "⬇️"}
              </span>
            </button>

            {isOpen && (
              <div className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion1
