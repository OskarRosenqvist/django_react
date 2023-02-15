import axios from "axios";

let baseURL = "http://localhost:8000/"
let apiURL = `${baseURL}api/v1/`
let authURL = `${baseURL}api/`

let API = {
    Add: `${apiURL}adds/`,
    auth: {
        login: `${authURL}token/`,
    }
}

export function getAddList() {
    const response = axios.get(API.Add, {
        headers: {
            Authorization: "Token abc123",
        }
    })
    return response
}

export function createAdd(formData) {
    const response = axios.post(API.Add, formData, {
        headers: {
            Authorization: "Token abc123",
        }
    })
    return response
}

export function login(token) {
    const user = {
        access_token: token,
    }
    localStorage.setItem('user', JSON.stringify(user))
    return user
}

export function logout() {
    localStorage.removeItem('user')
}

export function fetchToken(formData) {
    const response = axios.post(API.auth.login, formData, {
        headers: {
            Authorization: "JWT " +localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
            accept: 'application/json'

        }
    })
    return response
}