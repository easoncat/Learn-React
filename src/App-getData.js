import React, { memo, useState, useEffect } from 'react';
import MyRequestDemo from './Components/MyRequestDemo/MyRequestDemo';
import axios from 'axios';

const App = memo(() => {
  const [userData, setUserData] = useState([]);

  // 获取用户数据
  const getUserData = async() => {
    const res = await axios.get("http://localhost:3006/users");
    setUserData(res.data);
  }

  // 创建用户
  const createUser = async () => {
    const res = await axios.post("http://localhost:3006/users", {
      "id": "6",
      "name": "白骨精",
      "gender": "女",
      "age": 19,
      "add": "山西省太原市"
    });
    console.log('add data', res.data)
    getUserData()
  }

  // 查看详情
  const getUserDetails = async(id) => {
    const res = await axios.get("http://localhost:3006/users/" + id);
    console.log(res.data)
  }

  // 全量更新数据
  const updateUserData = async(id) => {
    await axios.put("http://localhost:3006/users/" + id, {
      "name": "太上老君",
      "gender": "男",
      "age": 110,
      "add": "江苏省无锡市"
    });
    getUserData()
  }

  // 删除数据
  const deleteUserData = async(id) => {
    await axios.delete("http://localhost:3006/users/" + id);
    getUserData()
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
      <div>
        <MyRequestDemo 
          userData={userData} 
          createUser={createUser} 
          getUserDetails={getUserDetails}
          updateUserData={updateUserData}
          deleteUserData={deleteUserData}
        ></MyRequestDemo>
      </div>
  )
})

export default App
