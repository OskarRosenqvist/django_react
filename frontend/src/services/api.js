import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from "../contexts/AuthContext";
import { authService } from "./authentication"

let baseURL = "http://localhost:8000/"
let apiURL = `${baseURL}api/v1/`
let authURL = `${baseURL}api/`

let API = {
    Add: `${apiURL}adds/`,
    auth: {
        access: `${authURL}token/`,
        refresh: `${authURL}token/refresh/`,
    }
}


export function GetAddList() {
    let user = JSON.parse(localStorage.getItem('user'))

    const response = axios.get(API.Add, {
        headers: {
            Authorization: "JWT " + user.token.access,
        }
    }).catch(function (error) {
        if (error.response.status === 401) {
            console.log('error 401')
            const response = axios.post(API.auth.refresh, {refresh: user.token.refresh}, {
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
                        Authorization: "JWT " + user.token.access,
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
export function fetchToken(formData, token) {
    let response = 'none'
    try {
        const response = axios.post(API.auth.access, formData, {
            headers: {
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json',
                accept: 'application/json'
    
            }
        })
        return response
    } catch (e) {
        console.log(e)
    }
    
    return response
}