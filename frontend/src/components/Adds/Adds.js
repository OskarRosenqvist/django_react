import { Button, Container, Card, CardContent, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { GetAddList, createAdd } from "../../services/api"



export const Adds = () => {
    const [addList, setAddList] = useState();
    const [newAddTitle, setNewAddTitle] = useState('');
    const [newAddPrice, setNewAddPrice] = useState('');
    const [newAddDesc, setNewAddDesc] = useState('');
    const [loading, setLoading] = useState(true);

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
        GetAddList().then(res => {
            setAddList(res.data)
        })
        setLoading(false)
    }, [loading]);

    return (
        <Container sx={{maxWidth:"sm"}}>
            <Container >
            <Typography sx={{fontWeight: 'bold', fontSize: 18}}>Create new add:</Typography>
                <TextField sx={{ margin: 2 }} id="addtitle" defaultValue="" label="addtitle" onInput={e => setNewAddTitle(e.target.value)} />
                </Container>
                <Container>
                <TextField sx={{ margin: 2 }} id="addprice" defaultValue="" label="addprice" onInput={e => setNewAddPrice(e.target.value)} />
                </Container>
                <Container>
                <TextField multiline rows={4} sx={{ margin: 2 }} id="adddesc" defaultValue="" label="adddesc" onInput={e => setNewAddDesc(e.target.value)} />
                </Container>
                <Container>
                <Button sx={{ background: 'lightblue', fontWeight: 'bold' }} id="submit" onClick={HandleInput}>Submit</Button>
            </Container>
            <Container>
                {loading? "Loading..." : ''}
                {addList?.map(add => {
                    return (
                    <Card key={add.id} sx={{ margin: 2 }}>
                        <CardContent>
                        <Typography sx={{fontWeight: 'bold', fontSize: 18}}>{add.title}</Typography>
                        <Typography>Price:</Typography>
                        <Typography>{add.price} kr</Typography>
                        <Typography>Description:</Typography>
                        <Typography>{add.description}</Typography>
                        </CardContent>
                </Card>
                )
                })}
            </Container>
            </Container>
    )
}