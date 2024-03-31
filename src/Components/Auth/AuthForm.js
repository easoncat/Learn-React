import React, { memo, useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { login } from '../../Store/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthForm = memo(() => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [regErr, setRegErr] = useState(false);

  const usernameInp = useRef()
  const pwdInp = useRef()
  const userEmailInp = useRef()

  // 获取 dispatch
  const dispatch = useDispatch();

  const nav = useNavigate();

  const location = useLocation();
  const from = location.state?.preLocation?.pathname || '/';

  const getUserInfo = async () => {
    const res = await axios.get("http://localhost:3006/users");
    return res
  }

  const getUserIsRegister = async (userName) => {
    const userInfo = await getUserInfo();
    if(userInfo.data.filter(item => item.name.indexOf(userName) !== -1).length > 0) {
        return true
    }
    return false
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const username = usernameInp.current.value;
    const pwd = pwdInp.current.value;
    if(isLoginForm) {
        // 登录成功后，需要向系统中添加一个标识，标记用户登录状态
        // 登录状态 布尔值 token 用户信息
        // 重定向跳转页面到根目录
        // 这个重定向需要优化一下，比如我访问 profile 页面，被重定向到登录页面，这时候登录，应该返回到 profile 页面
        // 也就是说 重定向到之前的目录
        dispatch(login({
            token: 'ejwt',
            name: username
        }));
        nav(from, {replace: true})

    } else {
        const email = userEmailInp.current.value;
        const isRegister = await getUserIsRegister(username);
        if(!isRegister) {
            // 注册逻辑
            try {
                const res = await axios.post("http://localhost:3006/users", {
                    "name": username,
                    "password": pwd,
                    "email": email
                });
                console.log("返回值：", res.data)
            } catch (error) {
                setRegErr(true)
                console.log(error)
            }
        } else {
            setRegErr(true)
        }
        
    }
  }

  return (
    <div>
        <p>{regErr? "注册失败，账号已注册或网络错误" : null}</p>
        <h2>{isLoginForm? "登录": "注册"}</h2>
        <form onSubmit={submitHandler}>
            <div>
                <input ref={usernameInp} type='text' placeholder='用户名'></input>
            </div>
            {
                !isLoginForm &&
                <div>
                    <input ref={userEmailInp} type='text' placeholder='邮箱'></input>
                </div>
            }
            <div>
                <input ref={pwdInp} type='password' placeholder='密码'></input>
            </div>
            <div>
                <button>{isLoginForm? "登录": "注册"}</button>
                <a href='#' onClick={(e) => {
                    e.preventDefault();
                    setIsLoginForm(!isLoginForm)
                }}>
                    {isLoginForm?"没有账号？点击登录": "已有账号？点击登录"}
                </a>
            </div>
        </form>
    </div>
  )
})

export default AuthForm