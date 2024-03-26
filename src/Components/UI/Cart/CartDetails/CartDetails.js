import React, { useContext, useState } from 'react'
import Backdrop from '../../Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Meal from '../../../Meals/Meal/Meal'
import Confirm from '../../Confirm/Confirm';
import CartContext from '../../../../Store/cart-context'
import "./CartDetails.scoped.css"

export default function CartDetails(props) {
  const ctx = useContext(CartContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const cancelHandler = (e) => {
    e.stopPropagation()
    setShowConfirm(false);
  }

  const okHandler = () => {
    // ctx.clearCart()
    ctx.cartDispatch({type: "CLEAR"})
  }

  return (
    <Backdrop>
        {showConfirm && <Confirm 
          confirmText={"确认清空购物车吗？"}
          cancelHandler={cancelHandler}
          okHandler={okHandler}
          ></Confirm>}

        <div className='cartDetails' onClick={e=>e.stopPropagation()}>
          <header className='header'>
            <h2 className='title'>餐品详情</h2>
            <div className='clear'>
              <FontAwesomeIcon icon={faTrash} />
              <span onClick={() => {setShowConfirm(true)}}>清空购物车</span>
            </div>
          </header>
          <div className='detail'>
            {
              ctx.items.map(item => <Meal
                nodesc 
                key={item.id} 
                meal={item}
              ></Meal>)
            }
          </div>
        </div>
    </Backdrop>
  )
}
