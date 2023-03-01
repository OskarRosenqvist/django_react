import axios from "axios";
import { authService } from "./auth"

let baseURL = process.env.NODE_ENV === 'production'? "http://" : "http://localhost:8000/"
let apiURL = `${baseURL}api/v1/`
let authURL = `${baseURL}api/`

export let API = {
    Add: `${apiURL}adds/`,
    auth: {
        access: `${authURL}token/`,
        refresh: `${authURL}token/refresh/`,
    }
}


export function GetAddList() {
    let user = authService.getUser();

    const response = axios.get(API.Add, {
        headers: {
            Authorization: "JWT " + user.tokens.access,
        }
    }).catch(function (error) {
        if (error.response.status === 401) {
            console.log('error 401')
            axios.post(API.auth.refresh, {refresh: user.tokens.refresh}, {
                headers: {
                    Authorization: `JWT 1`,
                    'Content-Type': 'application/json',
                    accept: 'application/json'
        
                }
            }).then(res => {
                user = authService.refreshToken(res.data)
                console.log(user)
                const response = axios.get(API.Add, {
                    headers: {
                        Authorization: "JWT " + user.tokens.access,
                    }
            })
            console.log(response)
                
            })
        }
    })

    return response 
}

export function createAdd(formData) {
    const response = axios.post(API.Add, formData, {
        headers: {
            Authorization: "JWT " +localStorage.getItem('user'),
        }
    })
    return response
}