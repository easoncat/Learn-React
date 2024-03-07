import React from 'react'
import LogItem from './LogItem/LogItem';
import './Logs.css'

export default function Logs() {
  return (
    <div className='logs'>
      {/* 日志项容器 */}
      <LogItem date={new Date(2022,5,22,19,0)} desc="学习React啊" time="50" />
      <LogItem date={new Date(2022,6,25,8,0)} desc="haha" time="30" />
    </div>
  )
}
