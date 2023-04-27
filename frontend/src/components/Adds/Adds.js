import { Button, Container, Card, CardContent, TextField, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { useState, useEffect } from 'react'
import { GetAddList, createAdd } from "../../services/api"
import "../Leaflet/Leaflet.js"
import { CreateAdd } from './CreateAdd';


export const Adds = () => {
    const [addList, setAddList] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        GetAddList().then(res => {
            setAddList(res.data.results.features)
            setLoading(false)
            localStorage.setItem('points', JSON.stringify(res.data.results.features))
        })
    }, [loading]);

    return (
        <Container sx={{maxWidth:"sm"}}>
            <Table>
                <TableBody>
                <TableRow >
                <TableCell id="map" sx={{height: 220, width: 120}}></TableCell>
                </TableRow>
                </TableBody>
            </Table>
            <CreateAdd />
            
            <Container>
                {loading? "Loading..." : ''}
                {addList?.map(add => {
                    return (
                    <Card key={add.id} sx={{ margin: 2 }}>
                        <CardContent>
                        <Table>
                            <TableBody>
                                <TableRow >
                                    <TableCell sx={{height: 22}}><Typography sx={{fontWeight: 'bold', fontSize: 22}}>{add.properties.title}</Typography></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={{height: 12}}>
                                        <Typography>{add.properties.price} kr</Typography>
                                    </TableCell>
                                    <TableCell sx={{height: 12}}>
                                        <Typography>{add.properties.description}</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        
                        </CardContent>
                </Card>
                )
                })}
            </Container>
            </Container>
    )
}