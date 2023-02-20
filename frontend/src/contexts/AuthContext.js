import { useState, createContext } from 'react'
import { authService } from '../services/authentication'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(() => {
        return authService.getUser()
    })

    function logout() {
        authService.logout()
        setUser(null)
    }
    
    function login(token) {
        const user = authService.login(token)
        setUser(user)
    }

    return (
        <AuthContext.Provider value={{
            logout,
            login,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}