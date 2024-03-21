import React, { useContext } from 'react'
import iconImg from '../../../asset/bag.png'
import CartContext from '../../../Store/cart-context'
import './Cart.scoped.css'

export default function Cart() {
  const ctx = useContext(CartContext)

  return (
    <div className='cart'>
        <div className='Icon'>
            <img src={iconImg} alt=''></img>
            {ctx.totalAmount === 0 ? null : <span className='totalAmount'>{ctx.totalAmount}</span>}
        </div>
        {ctx.totalAmount === 0 ? <p className='nomeal'>未选购商品</p> : <p className='price'>{ctx.totalPrice}</p>}
        <button className={`button ${ctx.totalAmount === 0 ? 'disabled' : ''}`}>去结算</button>
    </div>
  )
}
