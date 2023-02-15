import { Button, Container, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { fetchToken, login } from "../../services/api"



export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const HandleInput = () => {
        let formData = {
            'username': `${username}`,
            'password': `${password}`,
        }
        fetchToken(formData).then(res => {
            login(res.data.access)
        })
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