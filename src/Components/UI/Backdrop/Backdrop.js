import React from 'react'
import ReactDOM from 'react-dom';
import "./Backdrop.scoped.css"

const backdropDOM = document.getElementById('backdrop');

export default function Backdrop(props) {
  return ReactDOM.createPortal(<div
    {...props}
    className='backdrop'
  >
    {props.children}
  </div>, backdropDOM)
}
