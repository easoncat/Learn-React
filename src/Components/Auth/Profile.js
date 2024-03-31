import React, { memo } from 'react'
import { useSelector } from 'react-redux'

const Profile = memo(() => {
  const user = useSelector(state => state.auth);

  return (
    <>
      {user.isLogged ? (
          <div>
            <h2>用户信息页面</h2>
            <p>该页面只有在登录后才能查看</p>
            <p>
              用户名：{user.userName}
            </p>
          </div>
        ): null }
    </>
        
    
  )
})

export default Profile