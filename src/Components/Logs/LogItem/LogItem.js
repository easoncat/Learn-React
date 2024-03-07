import React from 'react'
import MyData from "./MyData/MyData"
import './LogItem.css'

export default function LogItem(props) {
  const {desc, time, date} = props;
  return (
    <div className='item'>
      {/* 日期容器 */}
      <MyData date={date} />

      {/* 日志内容的容器 */}
      <div className='content'>
        <h2 className='desc'>{desc}</h2>
        <div className='time'>{time}分钟</div>
      </div>
    </div>
  )
}
