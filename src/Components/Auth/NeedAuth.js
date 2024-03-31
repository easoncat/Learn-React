import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

// 使用这个组件去包裹需要登录验证的组件
// 当用户已登录，就会返回被包裹的标签体，如果没有登录，则会跳转到登录界面
const NeedAuth = memo((props) => {
  const user = useSelector(state => state.auth);
  const location = useLocation();


  return user.isLogged ? props.children : 
  <Navigate 
    to={"/authForm"} 
    replace
    state={{preLocation: location}}
    ></Navigate>
})

export default NeedAuth