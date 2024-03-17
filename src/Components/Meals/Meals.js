import React from 'react'
import "./Meals.scoped.css"
import Meal from './Meal/Meal'

export default function Meals(props) {
  return (
    <div>
      {/* 滚动条设置在 Meals */}
        <div className='title'>
            {
              props.mealsData.map(item => <Meal 
                key={item.id} 
                meal={item}
              ></Meal>)
            }
        </div>
    </div>
  )
}
