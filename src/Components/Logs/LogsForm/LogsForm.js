import React, { useState } from 'react'
import Card from '../../UI/Card/Card'
import "./LogsForm.css"


export default function LogsForm(props) {
  const [formDate, setFormDate] = useState('');
  const [formDesc, setFormDesc] = useState('');
  const [formTime, setFormTime] = useState('');

  const dataChangeHandler = (e) => {
    setFormDate(e.target.value);
  }

  const descChangeHandler = (e) => {
    setFormDesc(e.target.value);
  }

  const timeChangeHandler = (e) => {
    setFormTime(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newLog = {
      date: new Date(formDate),
      desc: formDesc,
      time: +formTime
    }
    props.onSubmitHandler(newLog);
    setFormDate("");
    setFormDesc("");
    setFormTime("");
  }


  return (
    <Card className="logs-form">
      <form onSubmit={formSubmitHandler}>
        <div className='form-item'>
          <label htmlFor='date'>日期</label>
          <input onChange={dataChangeHandler} value={formDate} id="date" type="date"></input>
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>内容</label>
          <input onChange={descChangeHandler} id="desc" value={formDesc} type="text"></input>
        </div>
        <div className='form-item'>
          <label htmlFor='time'>时间</label>
          <input onChange={timeChangeHandler} id="time" value={formTime} type="number"></input>
        </div>
        <div className='form-btn'>
          <button>添加</button>
        </div>
      </form>
    </Card>
  )
}
