import axios from "axios";

axios.defaults.withCredentials = true;

const loginAxios = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
})

const downloadAxios = axios.create({
    baseURL: "/api",
    timeout: 5000,
    responseType: 'arraybuffer'
})

const studentAxios = axios.create({
    baseURL: "/api",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000
})

export {loginAxios, downloadAxios, studentAxios}