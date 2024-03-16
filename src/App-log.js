import React, { memo, useState } from 'react';
import Logs from './Components/Logs/Logs';
import "./index.css"
import "./App.css"
import LogsForm from './Components/Logs/LogsForm/LogsForm';

const App = memo(() => {
  // 模拟一组从服务器中加载的数据
  const [logsData, setLogsData] = useState([
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
  ]);

  const onSubmitHandler = (formData) => {
    formData.id = +Date.now();
    setLogsData([formData,...logsData]);
  };

  const deleteLog = (index) => {
    if(logsData.length>1) {
      const newLogsData = logsData.filter(item => item.id !== logsData[index].id);
      setLogsData(newLogsData)
    } else {
      alert('不可删除')
    }
  }

  return (
    <div className='app'>
      <LogsForm onSubmitHandler={onSubmitHandler}></LogsForm>
      <Logs logsData={logsData} deleteLog={deleteLog}/>      
    </div>
  )
})

export default App
