import { useState, createContext } from 'react'
import { authService } from '../services/auth'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(() => {
        return authService.getUser()
    })

    const [loginError, setLoginError] = useState(false);

    function logout() {
        authService.logout()
        setUser(null)
        setLoginError(false)
    }
    
    function login(data) {
        const user = authService.login(data)
        setUser(user)
        if ({user}) {
            setLoginError(false)
        } else {
            setLoginError(true)
        }
    }

    return (
        <AuthContext.Provider value={{
            logout,
            login,
            user,
            loginError,
            setLoginError
        }}>
            {children}
        </AuthContext.Provider>
    )
}