import React from 'react'
import "./CheckoutItem.scoped.css"
import Counter from '../../../Counter/Counter'

export default function CheckoutItem(props) {
  const {desc} = props
  return (
    <div className='outer'>
        <div className='checkoutImg'>
            <img src={desc.img} alt=''></img>
        </div>
        <div className='desc'>
            <header>{desc.title}</header>
            <div className='descwrapper'>
                <Counter meal={desc}></Counter>
                <div className='price'>{desc.price * desc.amount}</div>
            </div>
        </div>
    </div>
  )
}
