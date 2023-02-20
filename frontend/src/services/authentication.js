function login(token) {
    const user = {
        token: token,
    }
    localStorage.setItem('user', JSON.stringify(user))
    return user
}

function refreshToken(token) {
    let user = JSON.parse(localStorage.getItem('user'))
    user.token.access = token.access
    user = login(user.token)
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
    refreshToken,
    logout,
    isLoggedIn,
    getUser
}

