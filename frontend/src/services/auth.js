import axios from "axios";
import { API } from "./api";

function login(data) {
    axios.post(API.auth.access, data, {
        headers: {
            Authorization: `JWT Login`,
            "Content-Type": 'application/json',
            accept: "application/json"
        }
    }).then(res => {
        if (res.data) {
            let user = {
                tokens: res.data,
            }
            localStorage.setItem('user', JSON.stringify(user))
            return user 
        }
    })
}

function fetchToken(formData, token) {
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

function refreshToken(token) {
    let user = JSON.parse(localStorage.getItem('user'))
    user.tokens.access = token.access
    user = login(user.tokens)
    return user
}

function logout() {
    localStorage.removeItem('user')
}

function isLoggedIn() {
    const user = localStorage.getItem('user')
    return user !== null
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'))
}

export const authService = {
    login,
    fetchToken,
    refreshToken,
    logout,
    isLoggedIn,
    getUser
}

