import React from 'react'
import Card from '../../UI/Card/Card'
import { useState } from 'react';
import "./LogsForm.css"


export default function LogsForm() {
  const [formData, setFormData] = useState({
    date: '',
    desc: '',
    time: ''
  });

  const dataChangeHandler = (e) => {
    setFormData({...formData, date: e.target.value});
  }

  const descChangeHandler = (e) => {
    setFormData({...formData, desc: e.target.value});
  }

  const timeChangeHandler = (e) => {
    setFormData({...formData, time: +e.target.value});
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newLog = {
      date: new Date(formData.date),
      desc: formData.desc,
      time: +formData.time
    }
    console.log(newLog)
    setFormData({
      date: '',
      desc: '',
      time: ''
    })
  }


  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className='form-item'>
          <label htmlFor='date'>日期</label>
          <input onChange={dataChangeHandler} value={formData.date} id="date" type="date"></input>
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>内容</label>
          <input onChange={descChangeHandler} id="desc" value={formData.desc} type="text"></input>
        </div>
        <div className='form-item'>
          <label htmlFor='time'>时间</label>
          <input onChange={timeChangeHandler} id="time" value={formData.time} type="number"></input>
        </div>
        <div className='form-btn'>
          <button>添加</button>
        </div>
      </form>
    </Card>
  )
}
