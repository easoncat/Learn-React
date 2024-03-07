import React, { memo } from 'react';
import Logs from './Components/Logs/Logs';
import "./index.css"

const App = memo(() => {
  return (
    <div>
      <Logs />      
    </div>
  )
})

export default App
