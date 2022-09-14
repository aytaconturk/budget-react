import axios from "axios"

export const api = () => {
    return axios.create({
        baseURL: "http://localhost:8282",
        headers: {
            "Content-type": "application/json",
            accept: "application/json"
        }
    }) 
}