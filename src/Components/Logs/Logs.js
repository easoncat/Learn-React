import React from 'react'
import LogItem from './LogItem/LogItem';
import Card from '../UI/Card/Card';
import './Logs.css'

export default function Logs() {
  // 模拟一组从服务器中加载的数据
  const logsData = [
    {
      id:1,
      date: new Date(2022,5,22,19,0),
      desc: '学习React哈',
      time: 30
    },
    {
      id:2,
      date: new Date(2022,6,25,4,0),
      desc: '学习Vue',
      time: 50
    },
    {
      id:3,
      date: new Date(2022,8,1,5,0),
      desc: '学习Nest',
      time: 40
    },
    {
      id:4,
      date: new Date(2022,9,20,6,0),
      desc: '学习Docker',
      time: 70
    }
  ]
  return (
    <Card className='logs'>
      {/* 日志项容器 */}
      {
        logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />)
      }
    </Card>
  )
}
