import axios from "axios"

export const api = () => {
    return axios.create({
        baseURL: "http://192.168.137.26:8181",
        headers: {
            "Content-type": "application/json",
            accept: "application/json"
        }
    }) 
}