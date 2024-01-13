'use client'

import React, {ReactNode} from 'react'


const HomeContent = ({ menu }:{ menu: ReactNode }) => {
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <div style={{marginBottom:'1rem'}}>
        <button onClick={handleToggle}>Toggle Menu</button>
      </div>

      <div style={{display: open ? 'block' : 'none'}}>
        {menu}
      </div>
    </>
  )
}

export default HomeContent
