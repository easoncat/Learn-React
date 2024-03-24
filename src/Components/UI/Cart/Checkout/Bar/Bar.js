import React, { useContext } from 'react'
import CartContext from '../../../../../Store/cart-context'
import "./Bar.scoped.css"

export default function Bar() {
  const ctx = useContext(CartContext);
  return (
    <div className='cart'>
        <div className='descWrapper'>
            <span className='total'>合计</span>
            <p className='price'>{ctx.totalPrice}</p>
        </div>
        <button className="button">去支付</button>
    </div>
  )
}
