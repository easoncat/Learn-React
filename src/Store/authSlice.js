import { createSlice } from "@reduxjs/toolkit";

// createSlice 创建 reducer 的切片
const authSlice = createSlice({
    name: "auth", // 自动生成 action 中的type
    initialState: () => {
        const token = localStorage.getItem('token');
        if(!token) {
            return {
                isLogged: false,
                token: '',
                userName: '',
                expirationTime: 0
            }
        }
        return {
            isLogged: true,
            token: token,
            userName: localStorage.getItem('username'),
            expirationTime: +localStorage.getItem('expirationTime')
        }
    },
    reducers: { // 指定state的各种操作，直接在对象中添加方法
        login(state, action) {
            // 通过不同的方法来指定对state的不同操作
            //  state: 代理对象，可以直接修改
            state.isLogged = true;
            state.token = action.payload.token;
            state.userName = action.payload.name;
            const currentTime = Date.now();
            // 设置登录的有效时间
            const timeout = 1000*60*60*24*7 // 一周
            state.expirationTime = currentTime + timeout;

            // 将数据存储到 localStorage 中
            // 只能存字符串，如果是对象需要 JSON.stringify(xx) 转换一下
            localStorage.setItem('token', state.token);
            localStorage.setItem('username', state.userName);
            localStorage.setItem('expirationTime', state.expirationTime+"");
        },
        logout(state) {
            state.isLogged = false;
            state.token = "";
            state.userName = '';
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            localStorage.removeItem('expirationTime');
        }
    }
})


// 切片对象会自动的帮助我们生成 action
// actions 中存储了 slice 自动生成 action 创建器函数，调用函数后会自动创建 action 对象
// action 对象的结构：{type:name/函数名, payload:函数的参数}
export const {login, logout} = authSlice.actions;
export const {reducer:authReducer} = authSlice;