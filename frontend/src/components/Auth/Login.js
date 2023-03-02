import { Button, Container, TextField, Typography, Box } from '@mui/material'
import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()

    const HandleInput = () => {
        let data = {
            'username': `${username}`,
            'password': `${password}`,
        }
        login(data);
        navigate('/');
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
                onBlur ={() => password.length<8? setPasswordError(true) : setPasswordError(false)}
                helperText={passwordError? 'Password must be 8 characters!' : ''}
                onInput={e => setPassword(e.target.value)} 
                required={true}
                />
                </Container>
                <Button sx={{ background: 'lightblue', fontWeight: 'bold' }} id="submit" onClick={HandleInput}>Submit</Button>
            </Box>
            </Container>
    )
}