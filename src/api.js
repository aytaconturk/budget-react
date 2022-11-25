import axios from "axios"

export const api = () => {
    return axios.create({
        baseURL: "http://89.252.140.243:8080/",
        headers: {
            "Content-type": "application/json",
            accept: "application/json"
        }
    }) 
}