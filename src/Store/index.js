import { configureStore } from "@reduxjs/toolkit";
import { schoolReducer } from "./schoolSlice";
import { stuReducer } from "./stuSlice";
import { authReducer } from "./authSlice";

// 创建 store
const store = configureStore({
    reducer: {
        student: stuReducer,
        school: schoolReducer,
        auth: authReducer
    }
})

export default store;