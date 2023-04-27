import { Button, Container, Card, CardContent, TextField, Typography, Table, TableRow, TableCell } from '@mui/material'
import { useState, useEffect } from 'react'
import { createAdd } from "../../services/api"


export const CreateAdd = () => {
    const [addList, setAddList] = useState();
    const [newAddTitle, setNewAddTitle] = useState('');
    const [newAddPrice, setNewAddPrice] = useState('');
    const [newAddDesc, setNewAddDesc] = useState('');
    const [loading, setLoading] = useState(true);
    const [createadd, setCreateAdd] = useState(false);

    const HandleInput = () => {
        setLoading(true)
        let price = parseInt(newAddPrice, 10);
        let formData = {
            'title': `${newAddTitle}`,
            'price': price,
            'description': `${newAddDesc}`,
        }
        createAdd(formData);
    }

    useEffect(() => {

    }, []);

    return (
        <Container sx={{maxWidth:"sm"}}>
            <Button sx={{ background: 'lightblue', fontWeight: 'bold', margin: 2 }} id="create" onClick={() => {setCreateAdd(!createadd)}}>Create Add</Button>
            
            {createadd && 
                <Container >
                <Typography sx={{fontWeight: 'bold', fontSize: 18}}>Create new add:</Typography>
                    <TextField sx={{ margin: 2 }} id="addtitle" defaultValue="" label="addtitle" onInput={e => setNewAddTitle(e.target.value)} />
                    <Container>
                    <TextField sx={{ margin: 2 }} id="addprice" defaultValue="" label="addprice" onInput={e => setNewAddPrice(e.target.value)} />
                    </Container>
                    <Container>
                    <TextField multiline rows={4} sx={{ margin: 2 }} id="adddesc" defaultValue="" label="adddesc" onInput={e => setNewAddDesc(e.target.value)} />
                    </Container>
                    <Container>
                    <Button sx={{ background: 'lightblue', fontWeight: 'bold' }} id="submit" onClick={HandleInput}>Submit</Button>
                </Container>
                </Container>
            }
            
            
            </Container>
    )
}