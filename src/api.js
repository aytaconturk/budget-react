import axios from "axios"

export const api = () => {
    const user = JSON.parse(localStorage.getItem('user'));


    return axios.create({
        // baseURL: "http://89.252.140.243:8080/",
        baseURL: "http://localhost:8181",
        headers: {
            "Content-type": "application/json",
            accept: "application/json",
            Authorization: `${user && user.accessToken ?  user.accessToken: null}`
        }
    }) 
}