import React, { useContext } from 'react'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import "./Checkout.scoped.css"
import CartContext from '../../../../Store/cart-context';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';

const checkoutDOM = document.getElementById('checkout-root');
export default function Checkout(props) {
    const ctx = useContext(CartContext);

    return ReactDOM.createPortal(<div
        className='checkout'
    >
        <div className='close' onClick={props.close}><FontAwesomeIcon icon={faXmark} /></div>
        <div className='checkout-detail'>
            <header className='header'>
                <h2>餐品详情</h2>
            </header>
            <div className='list'>
                { ctx.items.map(item => <CheckoutItem key={item.id} desc={item}></CheckoutItem>)}
            </div>
            
            <footer className='footer'>
                <p className='totalprice'>{ctx.totalPrice}</p>
            </footer>
        </div>
        <Bar></Bar>
    </div>, checkoutDOM)
}
