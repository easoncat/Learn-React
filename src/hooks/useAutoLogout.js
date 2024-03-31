import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Store/authSlice';
import { useEffect } from 'react';

const useAutoLogout = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // 创建一个 useEffect，用来处理登陆状态
  useEffect(() => {
    const timeout = auth.expirationTime - Date.now();
    if(timeout<60000) {
      dispatch(logout());
      return;
    }
    
    const timer = setTimeout(()=> {
      dispatch(logout())
    }, timeout)

    return () => {
      // 避免开启多个定时器
      clearTimeout(timer)
    }
  }, [auth])
}

export default useAutoLogout