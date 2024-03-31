import { createSlice } from "@reduxjs/toolkit";

// createSlice 创建 reducer 的切片
const stuSlice = createSlice({
    name: "stu", // 自动生成 action 中的type
    initialState: {
        name: "孙悟空",
        age: 18,
        gender: '男',
        add: '花果山'
    },// state 的初始值
    reducers: { // 指定state的各种操作，直接在对象中添加方法
        setName(state, action) {
            // 通过不同的方法来指定对state的不同操作
            //  state: 代理对象，可以直接修改
            state.name=action.payload;
        },
        setAge(state, action) {
            state.age = 28
        }
    }
})


// 切片对象会自动的帮助我们生成 action
// actions 中存储了 slice 自动生成 action 创建器函数，调用函数后会自动创建 action 对象
// action 对象的结构：{type:name/函数名, payload:函数的参数}
export const {setName, setAge} = stuSlice.actions;
export const {reducer:stuReducer} = stuSlice;