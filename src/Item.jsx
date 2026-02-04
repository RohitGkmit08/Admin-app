import React from 'react'

const Item = ({children}) => {
  return (
    <div className='accordion-item'>
        {children}
    </div>
  )
}

export default Item