import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from './Store/stuSlice';
import { setName as setSchoolName} from './Store/schoolSlice'

const App = memo(() => {
  const student = useSelector(state => state.student);
  const school = useSelector(state => state.school);
  // useDispatch() 来获取派发器对象
  const dispatch = useDispatch();

  const nameChangeHandler = () => {
    dispatch(setName('沙和尚'))
  }

  return (
    <div>
      <p>
        {student.name}---{student.age}---{student.add}
      </p>
      <button onClick={nameChangeHandler}>修改name</button>
      <hr></hr>
      <p>
        {school.name}---{school.age}---{school.add}
      </p>
      <button onClick={() => {dispatch(setSchoolName('女儿国'))}}>修改name</button>
    </div>
    
  )
})

export default App