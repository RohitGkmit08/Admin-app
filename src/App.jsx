import React, { useState } from 'react'
import Accordion1 from './Accordion1'
import './App.css'

const App = () => {
  const items = [
    { title: "title-1", content: "sample content -1" },
    { title: "title-2", content: "sample content -2" },
    { title: "title-3", content: "sample content -3" },
    { title: "title-4", content: "sample content -4" }
  ]

  const [openIndexes, setOpenIndexes] = useState([])
  const allowMultiple = false 

  const handleToggle = (index) => {
    setOpenIndexes((prev) => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      } else {
        return prev[0] === index ? [] : [index]
      }
    })
  }

  return (
    <div className="app">
      <Accordion1
        items={items}
        openIndexes={openIndexes}
        onToggle={handleToggle}
      />
    </div>
  )
}

export default App
