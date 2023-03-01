import { useState, createContext } from 'react'
import { authService } from '../services/auth'

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(() => {
        return authService.getUser()
    })

    function logout() {
        authService.logout()
        setUser(null)
    }
    
    function login(data) {
        const user = authService.login(data)
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