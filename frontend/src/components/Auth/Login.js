import { Button, Container, TextField, Typography, Box } from '@mui/material'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { login, user, loginError, setLoginError } = useContext(AuthContext);


    const navigate = useNavigate()

    const HandleInput = () => {
        setLoginError(false)
        let data = {
            'username': `${username}`,
            'password': `${password}`,
        }
        login(data);
        console.log({user})
        if ({user}) {
            navigate('/')
        }
    }

    return (
        <Container sx={{maxWidth: 600,}}>
            <Box  sx={{
                bgcolor: 'white',
                align: 'center',
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 300,
                }}>
            <Typography sx={{fontWeight: 'bold', fontSize: 18}}>Login:</Typography>
                <TextField 
                sx={{ margin: 2 }} 
                error={userError}
                onBlur ={() => username===""? setUserError(true) : setUserError(false)}
                helperText={userError? 'Enter username!' : ''}
                id="username" 
                defaultValue="" 
                label="username"
                required={true} 
                onInput={e => setUsername(e.target.value)} 
                />
                <Container>
                <TextField 
                sx={{ margin: 2 }} 
                id="password" 
                defaultValue="" 
                label="password" 
                type="password"
                error={passwordError}
                onBlur ={() => password.length<1? setPasswordError(true) : setPasswordError(false)}
                helperText={passwordError? 'Enter password!' : ''}
                onInput={e => setPassword(e.target.value)} 
                required={true}
                />
                <Typography sx={{fontColor: 'red', fontStyle: 'italic', fontSize: 10}} hidden={!loginError}>Enter correct username and password!</Typography>
                </Container>
                <Button sx={{ background: 'lightblue', fontWeight: 'bold' }} id="submit" onClick={HandleInput}>Submit</Button>
            </Box>
            </Container>
    )
}