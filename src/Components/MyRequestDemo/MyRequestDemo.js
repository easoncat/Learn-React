import React, { memo } from "react";
import "./MyRequestDemo.css"

const MyRequestDemo = memo((props) => {
  const {userData} = props
  return (
  <div className="wrapper">
    <table className="table">
      <caption>用户列表</caption>
      <thead>
        <tr>
            <th>id</th>
            <th>用户名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>地址</th>
            <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.age}</td>
                    <td>{item.add}</td>
                    <td style={{display: 'flex', justifyContent:'space-around'}}>
                        <button onClick={() => {props.getUserDetails(item.id)}}>详情</button>
                        <button onClick={() => {props.updateUserData(item.id)}}>修改</button>
                        <button onClick={() => {props.deleteUserData(item.id)}}>删除</button>
                    </td>
                </tr>
            )
        })}
        
      </tbody>
    </table>
    <div><button onClick={props.createUser}>新增一条</button></div>
  </div>);
});

export default MyRequestDemo;
