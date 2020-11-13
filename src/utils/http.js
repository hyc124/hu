import axios from "axios";
import { Toast } from "vant";
import vue from "vue";
import router from "../router";
import store from "../store/index";

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://lotus.mgtx-tech-dev.mgtx.com.cn"
        : window.location.protocol + "//" + window.location.host;
vue.prototype.$axios = axios;
const http = axios.create({
    // baseURL: baseURL,
    // baseURL: baseURL,
    timeout: 300000,
    headers: {
        token: sessionStorage.getItem("token"),
        'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'
    },
    baseURL: "http://192.168.8.27", //韩杰
    // baseURL: 'http://192.168.8.141',//张同明
});
