import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../Store/cart-context';
import './Counter.scoped.css'

// 计数器
export default function Counter(props) {
  const ctx = useContext(CartContext);
  const addButtonHandler = () => {
    // ctx.addItem(props.meal);
    ctx.cartDispatch({type: "ADD", meal: props.meal})
  }
  const subButtonHandler = () => {
    // ctx.removeItem(props.meal)
    ctx.cartDispatch({type: "REMOVE", meal: props.meal})
  }
  return (
    <div className='Counter-box'>
        {
            props.meal.amount && props.meal.amount !== 0 ? (
                <>
                    <button className='sub' onClick={subButtonHandler}><FontAwesomeIcon icon={faMinus} /></button>
                    <span className='count'>{props.meal.amount}</span>
                </>
                ) : null
        }
        
        <button onClick={addButtonHandler} className='add'>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  )
}
