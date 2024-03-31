import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Store/authSlice';

const MainMenu = memo(() => {
  const user = useSelector(state => state.auth);
  const dispatch = useDispatch()

  return (
    <div>
        <header>
        <ul>
            <li>
                <Link to={'/'}>首页</Link>
            </li>
            { !user.isLogged && <li>
                <Link to={'authForm'}>登录-注册</Link>
            </li>}
            { user.isLogged &&
                <>
                    <li>
                        <Link to={'/profile'}>用户信息</Link>
                    </li>
                    <li>
                        <Link to={'/'} onClick={()=> {dispatch(logout())}}>登出</Link>
                    </li>
                </>
            }
            
        </ul>
        </header>
    </div>
  )
})

export default MainMenu