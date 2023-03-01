import { Button, Container, TextField, Typography } from '@mui/material'
import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
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
        <Container sx={{maxWidth:"sm"}}>
            <Container >
            <Typography sx={{fontWeight: 'bold', fontSize: 18}}>Login:</Typography>
                <TextField sx={{ margin: 2 }} id="username" defaultValue="" label="username" onInput={e => setUsername(e.target.value)} />
                </Container>
                <Container>
                <TextField sx={{ margin: 2 }} id="password" defaultValue="" label="password" onInput={e => setPassword(e.target.value)} />
                </Container>
                <Container>
                <Button sx={{ background: 'lightblue', fontWeight: 'bold' }} id="submit" onClick={HandleInput}>Submit</Button>
            </Container>
            </Container>
    )
}