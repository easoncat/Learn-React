import React from 'react'
import "./MyData.css"

export default function MyData(props) {
  const {date} = props;
  return (
    <div className='date'>
      <div className='month'>
        {date.toLocaleString('zh-CN', {month:'long'})}
      </div>
      <div className='day'>
        {date.getDate()}
      </div>
    </div>
  )
}
