import React from 'react'
import LogItem from './LogItem/LogItem';
import Card from '../UI/Card/Card';
import './Logs.css'

export default function Logs(props) {
  const logsData = props.logsData;
  return (
    <Card className='logs'>
      {/* 日志项容器 */}
      {
        logsData.map((item, index) => <LogItem deleteLog={() => {props.deleteLog(index)}} key={item.id} date={item.date} desc={item.desc} time={item.time} />)
      }
    </Card>
  )
}
