import React, { memo } from 'react'
import MainMenu from './MainMenu'

const Layout = memo((props) => {
  return (
    <div>
        <MainMenu></MainMenu>
        <hr></hr>
        {props.children}
    </div>
  )
})

export default Layout