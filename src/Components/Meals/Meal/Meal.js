import React from 'react'
import "./Meal.scoped.css"
import Counter from '../../UI/Counter/Counter'

// 引入 FontAwesome
// 安装依赖：npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest


export default function Meal(props) {
  const {meal} = props;
  return (
    <div className='Meal'>
      <div className='img-box'>
        <img className='image' src={meal.img} alt=''></img>
      </div>
      <div className='content'>
        <h2 className='title'>{meal.title}</h2>
        {
          props.nodesc ? null : <p className='desc'>{meal.desc}</p>
        }
        <div className='priceWrap'>
          <div className='price'>{meal.price}</div>
          <Counter meal={meal}></Counter>
        </div>
      </div>
    </div>
  )
}
