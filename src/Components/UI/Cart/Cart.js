import React, { useContext, useState } from 'react'
import iconImg from '../../../asset/bag.png'
import CartContext from '../../../Store/cart-context'
import Checkout from './Checkout/Checkout'
import './Cart.scoped.css'
import CartDetails from './CartDetails/CartDetails'

export default function Cart() {
  const ctx = useContext(CartContext);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const toggleDetailsHandler = () => {
    if(ctx.totalAmount === 0) {
      setIsDetailVisible(false)
      return
    }
    setIsDetailVisible(!isDetailVisible)
  }

  const closeCheckout = () => {
    setShowCheckout(false)
  }

  return (
    <div className='cart' onClick={toggleDetailsHandler}>
        {showCheckout && <Checkout close={closeCheckout}></Checkout>}
        {isDetailVisible && <CartDetails></CartDetails>}
        
        <div className='Icon'>
            <img src={iconImg} alt=''></img>
            {ctx.totalAmount === 0 ? null : <span className='totalAmount'>{ctx.totalAmount}</span>}
        </div>
        {ctx.totalAmount === 0 ? <p className='nomeal'>未选购商品</p> : <p className='price'>{ctx.totalPrice}</p>}
        <button className={`button ${ctx.totalAmount === 0 ? 'disabled' : ''}`} onClick={()=> {setShowCheckout(true)}}>去结算</button>
    </div>
  )
}
