import { createSlice } from "@reduxjs/toolkit";


// 创建学校的切片
const schollSlice = createSlice({
    name: 'school',
    initialState: {
        name: "花果山小猴",
        age: 20,
        gender: '男',
        add: '花果山大街28号'
    },
    reducers: {
        setName(state, action) {
            state.name=action.payload;
        }
    }
})

export const {setName} = schollSlice.actions;
export const {reducer:schoolReducer} = schollSlice;