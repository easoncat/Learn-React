import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import './Confirm.scoped.css'

function Confirm(props) {
  return (
    <Backdrop onClick={(e) => {props.cancelHandler(e)}} className='backdrop'>
        <div className='confirmWrapper'>
            <p className='title'>{props.confirmText}</p>
            <div>
                <button className='cancel' onClick={(e) => {props.cancelHandler(e)}}>取消</button>
                <button className='ok' onClick={() => {props.okHandler()}}>确认</button>
            </div>
        </div>
    </Backdrop>
  )
}

export default Confirm
