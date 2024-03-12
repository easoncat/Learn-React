import React, { memo } from 'react';
import Logs from './Components/Logs/Logs';
import "./index.css"
import "./App.css"
import LogsForm from './Components/Logs/LogsForm/LogsForm';

const App = memo(() => {
  return (
    <div className='app'>
      <LogsForm></LogsForm>
      <Logs />      
    </div>
  )
})

export default App
